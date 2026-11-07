export const fetchItems = () => {
  return fetch('/api/items').then((response) => response.json());
};
