import { IComment } from './IComment';

export interface IArticle {
  id: string;
  title: string;
  description: string;
  content: string[];
  comments: IComment[];
}
