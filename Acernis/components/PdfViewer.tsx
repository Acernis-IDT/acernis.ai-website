"use client";
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  url: string;
}

export default function PdfViewer({ url }: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div style={{ padding: 40, textAlign: "center", color: "#6B7280", fontSize: 14 }}>
            Loading whitepaper…
          </div>
        }
        error={
          <div style={{ padding: 40, textAlign: "center", color: "#EF4444", fontSize: 14 }}>
            Could not load PDF.
          </div>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div
            key={i}
            style={{
              marginBottom: i < numPages - 1 ? 12 : 0,
              borderRadius: i === 0 ? "12px 12px 0 0" : i === numPages - 1 ? "0 0 12px 12px" : 0,
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <Page
              pageNumber={i + 1}
              width={containerWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
