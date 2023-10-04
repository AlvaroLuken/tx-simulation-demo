import axios from "axios";
import { ALCHEMY_ENDPOINT } from "./constants";
import isDev from "./isDev";
import { mockResponse } from "./mocks";

export const executeAlchemyApiWithParams = (params: string) => {
  if (isDev) {
    // mock a response here
    // ideally should mock based on the calling api
    return mockResponse.simulateAssetChanges;
  }
  return axios.post(ALCHEMY_ENDPOINT, params, {
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
  })
}