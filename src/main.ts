import express from "express";

import healthRoute from "@/routes/health.routes.js";
import { env } from "@/utils/env.config.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api", healthRoute);

const port = env.PORT;
app.listen(port, () => {
  console.log(`\x1b[32m⚡ Server ready:\x1b[0m \x1b[36mhttp://localhost:${String(port)}\x1b[0m`);
});
