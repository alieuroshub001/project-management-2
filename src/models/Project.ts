import { Schema, model, Document, Types } from 'mongoose';
import { Project } from '../types/project';

// Create an interface that properly merges with Mongoose Document
interface ProjectDocument extends Omit<Project, '_id' | 'createdBy' | 'teamMembers'>, Document {
  _id: Types.ObjectId;
  createdBy: Types.ObjectId;
  teamMembers: Types.ObjectId[];
}

const ProjectSchema = new Schema<ProjectDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['planning', 'active', 'on-hold', 'completed', 'archived'],
    default: 'planning'
  },
  visibility: {
    type: String,
    required: true,
    enum: ['public', 'private', 'team'],
    default: 'team'
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  teamMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tags: [{ type: String }]
});

// Update the updatedAt field before saving
ProjectSchema.pre<ProjectDocument>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const ProjectModel = model<ProjectDocument>('Project', ProjectSchema);