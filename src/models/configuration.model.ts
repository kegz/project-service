import mongoose, { Schema, Document, Types } from "mongoose";

export interface IConfiguration extends Document {
  projectId: Types.ObjectId;
  name: string;
  description?: string;
  baseUrl?: string;
  environmentVariables?: Record<string, string>;
  isActive: boolean;
}

const ConfigurationSchema = new Schema<IConfiguration>(
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    name: { type: String, required: true },
    description: { type: String },
    baseUrl: { type: String },
    environmentVariables: { type: Map, of: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const ConfigurationModel = mongoose.model<IConfiguration>(
  "Configuration",
  ConfigurationSchema
);
