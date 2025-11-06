import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project.routes.js";
import { config, connectDb } from "./config/index.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use((_req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; connect-src *; img-src * data: blob:; frame-src *;");
    next();
});
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/projects", projectRoutes);
connectDb().then(() => {
    app.listen(config.port, () => {
        console.log(`✅ Project Service running on port ${config.port}`);
    });
});
