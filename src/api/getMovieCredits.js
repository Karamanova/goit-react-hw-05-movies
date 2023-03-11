import { customAxios } from './axios';
import { toast } from 'react-toastify';

export const getCredits = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    toast.error('Sorry, backend error', {});
  }
};