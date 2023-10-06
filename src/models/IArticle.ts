import { IComment } from './IComment';

export interface IArticle {
  _id: string;
  title: string;
  description: string;
  content: string[];
  comments: IComment[];
  likes: number;
}
