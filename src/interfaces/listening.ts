import { CommonPaginated } from "interfaces";

export interface RequestListListening extends CommonPaginated {}

export interface QuestionListening {
  createdAt: string;
  deleted: boolean;
  id: string;
  level: string;
  partAudio: string;
  partNumber: number;
  partTitle: string;
  skill: string;
  updatedAt: string;
  __v?: number;
  _id: string;
}

