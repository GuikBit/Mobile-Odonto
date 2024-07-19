import axios from "axios";
import { getToken } from "../../hooks/TokenStore";
import { urlBase } from "./ApiAuth";


export async function apiGetAuth(url: any) {
    const instance = axios.create({
      baseURL: `${urlBase}`,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + (await getToken()) },
    });
  
    try {
      const response = await instance.get(`/v1/${url}/?idOrg=1`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

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

  export async function apiPostAuth(url: any, objeto: any) {
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

  export async function apiPutAuth(url: any, objeto: any) {
    const instance = axios.create({
      baseURL: `${urlBase}`,
      timeout: 1000,
      headers: { Authorization: 'Bearer ' + (await getToken()) },
    });
  
    try {
      instance.put(`/v1/${url}/${objeto.id}`, objeto);
    } catch (error) {
      console.error(error);
    }
  }