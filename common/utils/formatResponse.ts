import { AlchemyApiResponse } from "types";

export default function formatResponse (response: AlchemyApiResponse | undefined, nerdMode: boolean): string {
  if (!response) {
    return "";
  }
  if (nerdMode) {
    return JSON.stringify(response, undefined, 2);
  }
  return JSON.stringify({
   changes: response.result.changes
  }, undefined, 2)
}
