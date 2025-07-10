// types/task.ts
  
export interface Task {
  _id?: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'critical';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string; // User ID
  assignedTo: string[]; // User IDs
  comments: Comment[];
  attachments: Attachment[];
  checklist?: ChecklistItem[];
  columnId?: string; // For Kanban board columns
  order?: number; // For sorting in Kanban
  labels?: string[]; // For additional categorization
}

export interface Comment {
  _id?: string;
  content: string;
  createdAt: Date;
  createdBy: string; // User ID
  mentions: string[]; // User IDs
  isEdited?: boolean;
  editedAt?: Date;
}

export interface Attachment {
  _id?: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: Date;
  uploadedBy: string; // User ID
  thumbnailUrl?: string; // For image previews
}

export interface ChecklistItem {
  _id?: string;
  text: string;
  completed: boolean;
  completedAt?: Date;
  completedBy?: string; // User ID
}