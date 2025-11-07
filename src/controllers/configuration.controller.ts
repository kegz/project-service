import type { Request, Response } from "express";
import { ConfigurationModel } from "../models/configuration.model.js";

export const getConfigurations = async (req: Request, res: Response) => {
  try {
    const configs = await ConfigurationModel.find({ projectId: req.params.projectId });
    res.json(configs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching configurations", error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const record = await ConfigurationModel.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Record", error });
  }
};

export const createConfiguration = async (req: Request, res: Response) => {
  try {
    const config = await ConfigurationModel.create({
      ...req.body,
      projectId: req.params.projectId,
    });
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ message: "Error creating configuration", error });
  }
};
