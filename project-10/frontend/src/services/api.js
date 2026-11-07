import fetchClient from "../../../fetchClient.js";

export const fetchItems = () => {
  return fetchClient.fetch("/api/items").then((response) => response.json());
};
