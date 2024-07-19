import axios from 'axios';
import { getToken } from '../../hooks/TokenStore';
import { urlBase } from './ApiAuth';



export async function apiGetByIdAuth(url: any, id: any) {
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

export function apiPost(url: any, obj: any) {
    try {
      axios.post(`${urlBase}/v1/home/${url}`, obj);
    } catch (error) {
      console.error(error);
    }
}

export async function apiGetConsultasByPacienteIdAuth(url: any, id: any) {
    const instance = axios.create({
      baseURL: `${urlBase}`,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + (await getToken()) },
    });
  
    try {   
      const response = await instance.get(`/v1/${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }