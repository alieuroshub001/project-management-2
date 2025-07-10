// types/time-tracking.ts

export interface TimeEntry {
  _id?: string;
  userId: string;
  projectId?: string;
  taskId?: string;
  startTime: Date;
  endTime?: Date;
  duration?: number; // in minutes
  description?: string;
  isBillable: boolean;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  approvedBy?: string; // User ID
  approvedAt?: Date;
  screenshots?: Screenshot[];
  activityPercentage?: number;
}

export interface Screenshot {
  _id?: string;
  url: string;
  createdAt: Date;
  isBlurred: boolean;
  activityLevel?: number;
}

export interface Timesheet {
  _id?: string;
  userId: string;
  weekStartDate: Date;
  weekEndDate: Date;
  entries: string[]; // TimeEntry IDs
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: Date;
  approvedBy?: string; // User ID
  approvedAt?: Date;
  notes?: string;
}