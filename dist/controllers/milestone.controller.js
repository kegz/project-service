import { MilestoneModel } from "../models/milestone.model.js";
export const getMilestones = async (req, res) => {
    try {
        const milestones = await MilestoneModel.find({ projectId: req.params.projectId });
        res.json(milestones);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching milestones", error });
    }
};
export const createMilestone = async (req, res) => {
    try {
        const milestone = await MilestoneModel.create({
            ...req.body,
            projectId: req.params.projectId,
        });
        res.status(201).json(milestone);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating milestone", error });
    }
};
