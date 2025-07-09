//types/project.ts

export interface Project {
  _id?: string;
  title: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'archived';
  visibility: 'public' | 'private' | 'team';
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string; // User ID
  teamMembers: string[]; // User IDs
  tags?: string[];
}

export interface CreateProjectInput {
  title: string;
  description: string;
  status?: Project['status'];
  visibility?: Project['visibility'];
  startDate: Date | string;
  endDate?: Date | string;
  teamMembers?: string[];
  tags?: string[];
}