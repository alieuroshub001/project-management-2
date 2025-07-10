// types/hr.ts

export interface LeaveRequest {
  _id?: string;
  userId: string;
  type: 'casual' | 'sick' | 'annual' | 'other';
  startDate: Date;
  endDate: Date;
  reason?: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string; // User ID of approver
  reviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Attendance {
  _id?: string;
  userId: string;
  date: Date;
  clockIn: Date;
  clockOut?: Date;
  status: 'present' | 'absent' | 'late' | 'half-day';
  notes?: string;
}

export interface OnboardingTask {
  _id?: string;
  title: string;
  description: string;
  assignedTo: string; // User ID
  dueDate: Date;
  completed: boolean;
  completedAt?: Date;
  onboardingFor: string; // User ID of new hire
}