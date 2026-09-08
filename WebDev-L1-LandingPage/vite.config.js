import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    // Allow the v0 preview proxy hosts (e.g. sb-xxxx.vercel.run)
    allowedHosts: true,
  },
})
