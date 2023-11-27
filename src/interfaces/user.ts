import { CommonPaginated } from "interfaces";

export interface RequestListListening extends CommonPaginated {}

export interface QuestionUser {
  _id: string;
  username: string;
  email: string;
  verified: boolean;
  userType: string;
  active: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  fullname: string;
}
