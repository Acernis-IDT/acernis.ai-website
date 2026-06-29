"use client";

import { useRef, useEffect } from "react";

const fragmentShader = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_time;

#define PI 3.1415926535897932384626433832795

mat3 rotateX(float a) {
  float s = sin(a); float c = cos(a);
  return mat3(1.,0.,0., 0.,c,-s, 0.,s,c);
}
mat3 rotateY(float a) {
  float s = sin(a); float c = cos(a);
  return mat3(c,0.,s, 0.,1.,0., -s,0.,c);
}
mat3 rotateZ(float a) {
  float s = sin(a); float c = cos(a);
  return mat3(c,-s,0., s,c,0., 0.,0.,1.);
}

vec2 coord(in vec2 p) {
  p = p / u_resolution.xy;
  if (u_resolution.x > u_resolution.y) {
    p.x *= u_resolution.x / u_resolution.y;
    p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
  } else {
    p.y *= u_resolution.y / u_resolution.x;
    p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
  }
  p -= 0.5;
  return p;
}

vec2 project(vec3 p) {
  float perspective = 2.0 / (2.0 - p.z);
  return p.xy * perspective;
}

float distToSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float drawLine(vec2 p, vec2 a, vec2 b, float thickness, float blur) {
  float d = distToSegment(p, a, b);
  return smoothstep(thickness + blur, thickness - blur, d);
}

void getCubeVertices(out vec3 v[8]) {
  float s = 0.7;
  v[0] = vec3(-s,-s,-s); v[1] = vec3( s,-s,-s);
  v[2] = vec3( s, s,-s); v[3] = vec3(-s, s,-s);
  v[4] = vec3(-s,-s, s); v[5] = vec3( s,-s, s);
  v[6] = vec3( s, s, s); v[7] = vec3(-s, s, s);
}

float drawCube(vec2 p, mat3 rotation, float scale, float thickness, float blur) {
  vec3 v[8];
  getCubeVertices(v);
  for (int i = 0; i < 8; i++) v[i] = rotation * (v[i] * scale);

  float r = 0.0;
  r += drawLine(p, project(v[0]), project(v[1]), thickness, blur);
  r += drawLine(p, project(v[1]), project(v[2]), thickness, blur);
  r += drawLine(p, project(v[2]), project(v[3]), thickness, blur);
  r += drawLine(p, project(v[3]), project(v[0]), thickness, blur);
  r += drawLine(p, project(v[4]), project(v[5]), thickness, blur);
  r += drawLine(p, project(v[5]), project(v[6]), thickness, blur);
  r += drawLine(p, project(v[6]), project(v[7]), thickness, blur);
  r += drawLine(p, project(v[7]), project(v[4]), thickness, blur);
  r += drawLine(p, project(v[0]), project(v[4]), thickness, blur);
  r += drawLine(p, project(v[1]), project(v[5]), thickness, blur);
  r += drawLine(p, project(v[2]), project(v[6]), thickness, blur);
  r += drawLine(p, project(v[3]), project(v[7]), thickness, blur);
  return clamp(r, 0.0, 1.0);
}

vec3 render(vec2 st, vec2 mouse) {
  float mouseDistance = length(st - mouse);
  float mouseInfluence = 1.0 - smoothstep(0.0, 0.5, mouseDistance);

  float time = u_time * 0.18;
  mat3 rotation = rotateY(time + (mouse.x - 0.5) * mouseInfluence * 0.8) *
                  rotateX(time * 0.65 + (mouse.y - 0.5) * mouseInfluence * 0.8) *
                  rotateZ(time * 0.09);

  float blur = mix(0.0001, 0.04, mouseInfluence);
  float thickness = mix(0.0018, 0.0028, mouseInfluence);

  float shape = drawCube(st, rotation, 0.34, thickness, blur);

  // Acernis green #0FA876 = vec3(0.059, 0.659, 0.463)
  vec3 green = vec3(0.059, 0.659, 0.463);
  // Slightly brighter on edges for depth
  vec3 color = green * shape;

  float vignette = 1.0 - length(st) * 0.18;
  color *= vignette;
  color = pow(color, vec3(0.9));
  return color;
}

void main() {
  vec2 st = coord(gl_FragCoord.xy);
  vec2 mouse = coord(u_mouse * u_pixelRatio) * vec2(1., -1.);
  vec3 color = render(st, mouse);
  gl_FragColor = vec4(color, color.g * 1.5); // alpha tied to brightness
}
`;

const vertexShader = `
attribute vec3 a_position;
attribute vec2 a_uv;
varying vec2 v_texcoord;
void main() {
  gl_Position = vec4(a_position, 1.0);
  v_texcoord = a_uv;
}
`;

export default function GeometricBIMVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseDampRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    glRef.current = gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, vertexShader);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentShader);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    uniformsRef.current = {
      u_mouse: gl.getUniformLocation(program, "u_mouse"),
      u_resolution: gl.getUniformLocation(program, "u_resolution"),
      u_pixelRatio: gl.getUniformLocation(program, "u_pixelRatio"),
      u_time: gl.getUniformLocation(program, "u_time"),
    };

    const positions = new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,1,0]);
    const uvs = new Float32Array([0,0, 1,0, 0,1, 1,1]);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(program, "a_uv");
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

    return () => { gl.deleteProgram(program); };
  }, []);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
      glRef.current?.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouseRef.current = { x: cx - rect.left, y: cy - rect.top };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("touchmove", onMove); };
  }, []);

  useEffect(() => {
    let last = performance.now();
    const animate = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const canvas = canvasRef.current;
      const gl = glRef.current;
      const program = programRef.current;
      if (!canvas || !gl || !program) { rafRef.current = requestAnimationFrame(animate); return; }

      const damp = 8;
      mouseDampRef.current.x += (mouseRef.current.x - mouseDampRef.current.x) * damp * dt;
      mouseDampRef.current.y += (mouseRef.current.y - mouseDampRef.current.y) * damp * dt;

      gl.clear(gl.COLOR_BUFFER_BIT);
      const dpr = Math.min(window.devicePixelRatio, 2);
      const u = uniformsRef.current;
      if (u.u_mouse)      gl.uniform2f(u.u_mouse, mouseDampRef.current.x, mouseDampRef.current.y);
      if (u.u_resolution) gl.uniform2f(u.u_resolution, canvas.width, canvas.height);
      if (u.u_pixelRatio) gl.uniform1f(u.u_pixelRatio, dpr);
      if (u.u_time)       gl.uniform1f(u.u_time, (Date.now() - startTimeRef.current) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", minHeight: 380 }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
