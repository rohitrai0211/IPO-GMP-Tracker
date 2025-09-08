const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/ipos', (req, res) => {
  res.json([
    { name: 'IPO A', price: 100, gmp: 20, subscription: '2x', recommendation: 'Buy', date: '2025-09-08', raw: { gmpText: 'GMP info' }, source: 'Public source' },
    { name: 'IPO B', price: 50, gmp: 0, subscription: '1x', recommendation: 'Neutral', date: '2025-09-08', raw: { gmpText: 'GMP info' }, source: 'Public source' },
    { name: 'IPO C', price: 120, gmp: 30, subscription: '5x', recommendation: 'Avoid', date: '2025-09-08', raw: { gmpText: 'GMP info' }, source: 'Public source' }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
