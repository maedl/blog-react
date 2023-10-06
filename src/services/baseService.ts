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

export const post = async <T, U>(url: string, body?: U): Promise<T | null> => {
  try {
    const response = await axios.post<T>(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const put = async <T, U>(url: string, body?: U): Promise<T | null> => {
  try {
    const response = await axios.put<T>(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
