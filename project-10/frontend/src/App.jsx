import React from 'react';
import { fetchItems } from './services/api';
import ListItems from './components/ListItems';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchAndSetItems = async () => {
      try {
        const response = await fetchItems();
        setItems(response.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ListItems items={items} />
    </div>
  );
};

export default App;
