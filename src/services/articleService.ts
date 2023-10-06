import { IArticle } from '../models/IArticle';
import { get, put } from './baseService';

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const PORT = import.meta.env.VITE_API_PORT;

export interface IArticlesSummary {
  _id: string;
  title: string;
  description: string;
}

export const getArticlesSummary = async () => {
  const url = `${BASE_URL}:${PORT}/api/articles/summary`;
  const responseData = await get<Array<IArticlesSummary>>(url);
  if (responseData) {
    return responseData;
  }
  return [];
};

export const getArticleById = async (
  articleId: string
): Promise<IArticle | null> => {
  const url = `${BASE_URL}:${PORT}/api/articles/${articleId}`;
  const responseData = await get<IArticle>(url);
  return responseData;
};

export const likeArticle = async (
  articleId: string | undefined
): Promise<number | undefined> => {
  if (!articleId) return;
  const url = `${BASE_URL}:${PORT}/api/articles/${articleId}/like`;
  const responseData = await put<number>(url);
  if (!responseData) return;

  return responseData;
};
