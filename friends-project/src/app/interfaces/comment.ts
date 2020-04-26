import { User } from "./user";

export interface Comment {
  id: number,
  created_date: Date,
  content: string,
  created_by:User
}