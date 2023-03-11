import { customAxios } from './axios';
import { toast } from 'react-toastify';

export const searchMovies = async query => {
  try {
    const response = await customAxios.get('/search/movie', {
      params: query,
    });
    return response;
  } catch (error) {
    toast.error('Sorry, backend error', {});
  }
};