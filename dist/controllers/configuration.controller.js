import { ConfigurationModel } from "../models/configuration.model.js";
export const getConfigurations = async (req, res) => {
    try {
        const configs = await ConfigurationModel.find({ projectId: req.params.projectId });
        res.json(configs);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching configurations", error });
    }
};
export const createConfiguration = async (req, res) => {
    try {
        const config = await ConfigurationModel.create({
            ...req.body,
            projectId: req.params.projectId,
        });
        res.status(201).json(config);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating configuration", error });
    }
};
