import type { Request, Response } from "express";
import { ProjectModel } from "../models/project.model.js";

export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deactivated", project });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error });
  }
};
