import { get } from './baseService';

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const PORT = import.meta.env.VITE_API_PORT;

export interface IArticlesSummary {
  _id: string;
  title: string;
  description: string;
}

export const getArticlesSummary = async () => {
  const url = `${BASE_URL}:${PORT}/api/articles/summary`;
  console.log('url', url);
  const responseData = await get<Array<IArticlesSummary>>(url);
  if (responseData) {
    return responseData;
  }
  return [];
};
