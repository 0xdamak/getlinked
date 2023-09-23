import axios from "axios";

export interface IContactDTO {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}

export interface IRegisterDTO {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}

export interface ICategoryList {
  id: number;
  name: string;
}

export const BASE_URL = "https://backend.getlinked.ai";

export function register(payload: IRegisterDTO) {
  return axios.post(`${BASE_URL}/hackathon/registration`, payload);
}

export function contact(payload: IContactDTO) {
  return axios.post(`${BASE_URL}/hackathon/contact-form`, payload);
}

export function getCategoryList() {
  return axios.get<ICategoryList[]>(`${BASE_URL}/hackathon/categories-list`);
}
