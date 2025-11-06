import express from "express";
import { authenticate } from "prime-qa-commons";
import { getConfigurations, createConfiguration } from "../controllers/configuration.controller.js";
import { getMilestones, createMilestone } from "../controllers/milestone.controller.js";
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/project.controller.js";
const router = express.Router();
router.get("/", authenticate, getProjects);
router.get("/:id", authenticate, getProjectById);
router.post("/", authenticate, createProject);
router.put("/:id", authenticate, updateProject);
router.delete("/:id", authenticate, deleteProject);
// Configurations
router.get("/:projectId/configurations", authenticate, getConfigurations);
router.post("/:projectId/configurations", authenticate, createConfiguration);
// Milestones
router.get("/:projectId/milestones", authenticate, getMilestones);
router.post("/:projectId/milestones", authenticate, createMilestone);
export default router;
