import axios from 'axios';
import { getToken } from '../../hooks/TokenStore';

export async function apiGetByIdAuth(url, id) {
    const instance = axios.create({
      baseURL: `${urlBase}`,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + (await getToken()) },
    });
    try {
      const response = await instance.get(`/v1/${url}/${id}`);
      // console.log(response.status)
      if(response.status === 404){
        return {};
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function apiPostAuth(url, objeto) {
    const instance = axios.create({
      baseURL: `${urlBase}`,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + (await getToken()) },
    });
  
    try {
     const response = await instance.post(`/v1/${url}`, objeto);
      return response.status;
    } catch (error) {
      console.error(error);
    }
  }

 