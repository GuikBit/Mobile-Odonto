import axios from 'axios';
import { getToken } from '../../hooks/TokenStore';

export const urlBase =
  'https://redbird-clean-frequently.ngrok-free.app';

export async function apiGetAuth(url: any) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
    const response = await instance.get(`${urlBase}/v1/${url}/?idOrg=1`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiLogin(obj: any) {    
    try {
      const response = await axios.post(`${urlBase}/v1/home/login`, obj).catch(response=>{return response});
      return response.data;
    } catch (error) {
      
    }
  }