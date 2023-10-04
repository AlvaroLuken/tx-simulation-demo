import axios from "axios";
import { ALCHEMY_ENDPOINT } from "./constants";
import isDev from "./isDev";
import { TransactionParam, TransactionParams } from "types";
import { ExecutionType } from "types";
import { mockResponse } from "./mocks";

export const executeAlchemyApiWithParams = (params: string) => {
  if (isDev) {
    const parsedParams = JSON.parse(params) as TransactionParam;
    switch (parsedParams.method) {
      case "alchemy_simulateAssetChanges": {
        return mockResponse.simulateAssetChanges;
      }
      case "alchemy_simulateExecution": {
        return mockResponse.simulateExecution;
      }
      case 'alchemy_simulateAssetChangesBundle': {
        return mockResponse.simulateAssetChangesBundle;
      }
      case "alchemy_simulateExecutionBundle": {
        return mockResponse.simulateExecutionBundle;
      }
      default: {
        throw Error (`unknown api method: ${parsedParams.method}`);
      }
    }
  }
  return axios.post(ALCHEMY_ENDPOINT, params, {
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
  })
}


export const prepareBundledParams = (type: ExecutionType, selectedParams: TransactionParams) => {
  let method;
  switch (type) {
    case "SIMULATE_ASSET_CHANGES": {
      method = "alchemy_simulateAssetChangesBundle";
    }
    break;
    case "SIMULATE_EXECUTION": {
      method = "alchemy_simulateExecutionBundle";
    }
    break;
  }
  let bundled = {
    id: 1,
    method,
    jsonrpc: "2.0",
    params: []
  };
  for (let i = 0; i < selectedParams.length; i++) {
    const params = [...bundled.params, selectedParams[i].params[0]];
    Object.assign(bundled, {
      ...bundled,
      params
    })
  }
  // @note alchemy's api expects an array of objects in the zeroth element of params array
  // not sure why there's this peculiar construction of this array
  return Object.assign(bundled, {...bundled, params: [bundled.params]});
}
