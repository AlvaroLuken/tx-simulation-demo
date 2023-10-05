import { AlchemyApiResponse } from "types";

export default function formatResponse (response: AlchemyApiResponse | undefined, nerdMode: boolean): string {
  if (!response) {
    return "";
  }

  // if nerd mode is on, display the json as is
  if (nerdMode) {
    return JSON.stringify(response, undefined, 2);
  }

  // non nerd mode response
  return JSON.stringify(response.result, undefined, 2)
}
