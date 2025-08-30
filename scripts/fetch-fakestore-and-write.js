const fs = require('fs');
const fetch = require('node-fetch');

async function run() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    // group by category
    const map = products.reduce((acc, p) => {
      const key = (p.category || 'misc').toLowerCase();
      acc[key] = acc[key] || [];
      acc[key].push({ id: p.id, name: p.title, price: p.price, imageUrl: p.image });
      return acc;
    }, {});

    const categories = Object.keys(map).map((k) => ({
      title: k,
      route: k,
      imageUrl: map[k][0]?.imageUrl || '',
      items: map[k],
    }));

    fs.writeFileSync('./src/data/generated-shop-data.json', JSON.stringify(categories, null, 2));
    console.log('Wrote ./src/data/generated-shop-data.json with', categories.length, 'categories');
  } catch (err) {
    console.error('Failed to fetch or write', err);
    process.exit(1);
  }
}

run();
