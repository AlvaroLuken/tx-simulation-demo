import axios from "axios";
import { ALCHEMY_ENDPOINT } from "./constants";

export const executeAlchemyApiWithParams = (params: string) => axios.post(ALCHEMY_ENDPOINT, params, {
  headers: { "Content-Type": "application/json", "Accept": "application/json" },
})