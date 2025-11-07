import type { Request, Response } from "express";
import { MilestoneModel } from "../models/milestone.model.js";

export const getMilestones = async (req: Request, res: Response) => {
  try {
    const milestones = await MilestoneModel.find({ projectId: req.params.projectId });
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ message: "Error fetching milestones", error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const record = await MilestoneModel.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Record", error });
  }
};

export const createMilestone = async (req: Request, res: Response) => {
  try {
    const milestone = await MilestoneModel.create({
      ...req.body,
      projectId: req.params.projectId,
    });
    res.status(201).json(milestone);
  } catch (error) {
    res.status(500).json({ message: "Error creating milestone", error });
  }
};
