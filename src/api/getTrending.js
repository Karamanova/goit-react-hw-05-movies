import { customAxios } from './axios';
import { toast } from 'react-toastify';

export const getTrending = async () => {
  try {
    const response = await customAxios.get('/trending/movie/day');
    const { data } = response;
    return data;
  } catch (error) {
    toast.error('Sorry, backend error', {});
  }
};