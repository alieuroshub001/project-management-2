// types/communication.ts

import { Attachment } from "./task";

export interface Channel {
  _id?: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  createdBy: string; // User ID
  members: string[]; // User IDs
  projectId?: string; // If related to a project
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  _id?: string;
  channelId: string;
  content: string;
  createdBy: string; // User ID
  createdAt: Date;
  updatedAt: Date;
  isEdited?: boolean;
  editedAt?: Date;
  parentId?: string; // For threaded replies
  attachments: Attachment[];
  mentions: string[]; // User IDs
  reactions?: Record<string, string[]>; // emoji: [userIds]
}

export interface DirectMessage {
  _id?: string;
  participants: string[]; // User IDs [user1, user2]
  messages: Message[];
  lastMessageAt: Date;
}