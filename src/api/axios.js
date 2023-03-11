import axios from 'axios';
import { API_KEY } from './Api';
import { BASE_URL } from './Api';

export const customAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});