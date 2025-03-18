import axios from "axios";

export const getRequest = (url: string, params?: any) => 
  axios.get(url, { params }).then((res) => res.data);

export const postRequest = (url: string, data: any) => 
  axios.post(url, data).then((res) => res.data);

export const putRequest = (url: string, data: any) => 
  axios.put(url, data).then((res) => res.data);

export const deleteRequest = (url: string, data?: any) => 
  axios.delete(url, { data }).then((res) => res.data);   