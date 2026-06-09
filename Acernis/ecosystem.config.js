module.exports = {
  apps: [
    {
      name: "acernis",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      cwd: "c:\\Users\\larsk\\Desktop\\Overview\\03 Claude Projects\\01 My Projects\\acernis",
      interpreter: "node",
      watch: false,
      autorestart: true,
      max_restarts: 20,
      restart_delay: 2000,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
