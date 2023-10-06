import axios from 'axios';

export const get = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const put = async <T>(url: string, body?: T): Promise<T | null> => {
  try {
    const response = await axios.put<T>(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
