import { Category } from '../store/categories/category.types';

// Expanded local dataset — helpful for offline testing and to ensure many categories are available.
// Images use Unsplash generic product photography. Replace with your own assets as needed.
const LOCAL_SHOP_DATA: Category[] = [
  {
    title: 'Hats',
    imageUrl: 'https://images.unsplash.com/photo-1520975911230-7dfb4f4b3a4d?auto=format&fit=crop&w=800&q=60',
    route: 'hats',
    items: [
      { id: 1, name: 'Brown Brim', imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png', price: 25 },
      { id: 2, name: 'Blue Beanie', imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png', price: 18 },
      { id: 3, name: 'Green Cap', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60', price: 22 },
      { id: 4, name: 'Red Beanie', imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png', price: 18 },
      { id: 5, name: 'Classic Fedora', imageUrl: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60', price: 45 },
      { id: 6, name: 'Palm Tree Cap', imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png', price: 14 },
    ],
  },
  {
    title: 'Sneakers',
    imageUrl: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60',
    route: 'sneakers',
    items: [
      { id: 10, name: 'Adidas NMD', imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png', price: 220 },
      { id: 11, name: 'Nike Air', imageUrl: 'https://images.unsplash.com/photo-1519744472237-5a7f9f8b8a1b?auto=format&fit=crop&w=800&q=60', price: 180 },
      { id: 12, name: 'Black Converse', imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png', price: 110 },
      { id: 13, name: 'Timberlands', imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png', price: 200 },
      { id: 14, name: 'Blue Runner', imageUrl: 'https://images.unsplash.com/photo-1528701800489-4768f3a03c1b?auto=format&fit=crop&w=800&q=60', price: 140 },
      { id: 15, name: 'White Low Top', imageUrl: 'https://images.unsplash.com/photo-1520975681916-39c8b27b1f2a?auto=format&fit=crop&w=800&q=60', price: 120 },
    ],
  },
  {
    title: 'Jackets',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60',
    route: 'jackets',
    items: [
      { id: 18, name: 'Black Jean Shearling', imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png', price: 125 },
      { id: 19, name: 'Blue Jean Jacket', imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png', price: 90 },
      { id: 20, name: 'Brown Shearling', imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png', price: 165 },
      { id: 21, name: 'Tan Trench', imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png', price: 185 },
      { id: 22, name: 'Grey Bomber', imageUrl: 'https://images.unsplash.com/photo-1602810311436-6d4d0d2b3f2b?auto=format&fit=crop&w=800&q=60', price: 150 },
      { id: 23, name: 'Windbreaker', imageUrl: 'https://images.unsplash.com/photo-1526808546069-4f7c0892f1b0?auto=format&fit=crop&w=800&q=60', price: 95 },
    ],
  },
  {
    title: 'Womens',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=60',
    route: 'womens',
    items: [
      { id: 24, name: 'Floral Dress', imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png', price: 80 },
      { id: 25, name: 'Striped Sweater', imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png', price: 45 },
      { id: 26, name: 'Yellow Track Suit', imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png', price: 135 },
      { id: 27, name: 'White Blouse', imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png', price: 20 },
      { id: 28, name: 'Blue Tanktop', imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png', price: 25 },
      { id: 29, name: 'Red Polka Dress', imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png', price: 82 },
    ],
  },
  {
    title: 'Mens',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=60',
    route: 'mens',
    items: [
      { id: 30, name: 'Camo Down Vest', imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png', price: 325 },
      { id: 31, name: 'Floral T-shirt', imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png', price: 20 },
      { id: 32, name: 'Black & White Longsleeve', imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png', price: 25 },
      { id: 33, name: 'Jean Long Sleeve', imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png', price: 40 },
      { id: 34, name: 'Burgundy T-shirt', imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png', price: 25 },
      { id: 35, name: 'Pink T-shirt', imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png', price: 25 },
    ],
  },
  {
    title: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
    route: 'electronics',
    items: [
      { id: 100, name: 'Wireless Headphones', imageUrl: 'https://images.unsplash.com/photo-1518444025702-0d6f6d6b7d8e?auto=format&fit=crop&w=800&q=60', price: 199 },
      { id: 101, name: 'Smart Watch', imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=60', price: 149 },
      { id: 102, name: 'Bluetooth Speaker', imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60', price: 99 },
    ],
  },
  {
    title: 'Jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1520975911230-7dfb4f4b3a4d?auto=format&fit=crop&w=800&q=60',
    route: 'jewelry',
    items: [
      { id: 200, name: 'Silver Necklace', imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60', price: 89 },
      { id: 201, name: 'Gold Ring', imageUrl: 'https://images.unsplash.com/photo-1526406915891-5a9b6a62a7b8?auto=format&fit=crop&w=800&q=60', price: 120 },
    ],
  },
];

export default LOCAL_SHOP_DATA;
