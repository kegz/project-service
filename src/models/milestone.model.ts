import mongoose, { Schema, Document, Types } from "mongoose";

export interface IMilestone extends Document {
  projectId: Types.ObjectId;
  title: string;
  description?: string;
  startDate?: Date;
  dueDate?: Date;
  isCompleted: boolean;
}

const MilestoneSchema = new Schema<IMilestone>(
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date },
    dueDate: { type: Date },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const MilestoneModel = mongoose.model<IMilestone>(
  "Milestone",
  MilestoneSchema
);
