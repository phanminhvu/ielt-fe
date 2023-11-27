import { CommonPaginated } from "interfaces";

export interface RequestListListening extends CommonPaginated {}

export interface QuestionListening {
  createdAt: string;
  deleted: boolean;
  directionAudio:string;
  id: string;
  level: string;
  partNumber: number;
  partTitle: string;
  skill: string;
  updatedAt: string;
  __v?: number;
  _id: string;
}
