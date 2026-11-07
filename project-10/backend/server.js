import express from 'express';


const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  res.json({ items });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
