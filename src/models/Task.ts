import { Schema, model, Document, Types } from 'mongoose';
import { Task, Comment as TaskComment, Attachment as TaskAttachment, ChecklistItem as TaskChecklistItem } from '../types/task';

// Define subdocument interfaces that extend the original types
interface Comment extends Omit<TaskComment, '_id' | 'createdBy' | 'mentions'> {
  _id?: Types.ObjectId;
  createdBy: Types.ObjectId;
  mentions: Types.ObjectId[];
}

interface Attachment extends Omit<TaskAttachment, '_id' | 'uploadedBy'> {
  _id?: Types.ObjectId;
  uploadedBy: Types.ObjectId;
}

interface ChecklistItem extends Omit<TaskChecklistItem, '_id'> {
  _id?: Types.ObjectId;
}

// Create a document interface that merges with Mongoose
interface TaskDocument extends Omit<Task, '_id' | 'projectId' | 'createdBy' | 'assignedTo' | 'comments' | 'attachments' | 'checklist'>, Document {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  createdBy: Types.ObjectId;
  assignedTo: Types.ObjectId[];
  comments: Comment[];
  attachments: Attachment[];
  checklist?: ChecklistItem[];
}

const CommentSchema = new Schema<Comment>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentions: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const AttachmentSchema = new Schema<Attachment>({
  name: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const ChecklistItemSchema = new Schema<ChecklistItem>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TaskSchema = new Schema<TaskDocument>({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done', 'blocked'],
    default: 'todo'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [CommentSchema],
  attachments: [AttachmentSchema],
  checklist: [ChecklistItemSchema]
});

// Update the updatedAt field before saving
TaskSchema.pre<TaskDocument>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const TaskModel = model<TaskDocument>('Task', TaskSchema);