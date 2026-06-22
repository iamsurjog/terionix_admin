export default defineEventHandler(() => ({
  status: "ok",
  service: "admin",
  timestamp: new Date().toISOString(),
}))
