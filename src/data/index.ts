import sneakers1 from './sneakers-1.jpg';
import sneakers2 from './sneakers-2.jpg';
import sneakers3 from './sneakers-3.jpg';
import camera1 from './camera-1.jpg';
import camera2 from './camera-2.jpg';
import camera3 from './camera-3.jpg';
import backpack1 from './backpack-1.jpg';
import backpack2 from './backpack-2.jpg';
import backpack3 from './backpack-3.jpg';
import watch1 from './watch-1.jpg';
import watch2 from './watch-2.jpg';
import watch3 from './watch-3.jpg';

export interface ProductsType {
  id: string;
  title: string;
  supDescription: string;
  description: string;
  category: string;
  imgUrl: string;
  price: string;
  rate: number;
  quantity: number;
}

export const listOfProducts: ProductsType[] = [
  {
    id: '1',
    title: 'sneakers',
    supDescription: 'sporting sneakers',
    description:
      "Our casual sneakers offer the perfect blend of comfort and style. With a variety of designs and colors, you can find the perfect pair to complement your wardrobe. Experience unparalleled comfort with our collection of casual sneakers. Crafted with premium materials and advanced technology, these shoes are designed to keep your feet feeling fresh all day long. Our casual sneakers are more than just footwear; they're a statement. Add a touch of personality to your outfit with our trendy designs and vibrant colors.",
    category: 'Sneakers',
    imgUrl: sneakers1.src,
    price: '90',
    rate: 4.5,
    quantity: 1,
  },
  {
    id: '2',
    title: 'sneakers',
    supDescription: 'sporting sneakers',
    description:
      "Our casual sneakers offer the perfect blend of comfort and style. With a variety of designs and colors, you can find the perfect pair to complement your wardrobe. Experience unparalleled comfort with our collection of casual sneakers. Crafted with premium materials and advanced technology, these shoes are designed to keep your feet feeling fresh all day long. Our casual sneakers are more than just footwear; they're a statement. Add a touch of personality to your outfit with our trendy designs and vibrant colors.",
    category: 'Sneakers',
    imgUrl: sneakers2.src,
    price: '95',
    rate: 4,
    quantity: 1,
  },
  {
    id: '3',
    title: 'sneakers',
    supDescription: 'sporting sneakers',
    description:
      "Our casual sneakers offer the perfect blend of comfort and style. With a variety of designs and colors, you can find the perfect pair to complement your wardrobe. Experience unparalleled comfort with our collection of casual sneakers. Crafted with premium materials and advanced technology, these shoes are designed to keep your feet feeling fresh all day long. Our casual sneakers are more than just footwear; they're a statement. Add a touch of personality to your outfit with our trendy designs and vibrant colors.",
    category: 'Sneakers',
    imgUrl: sneakers3.src,
    price: '100',
    rate: 5,
    quantity: 1,
  },
  {
    id: '4',
    title: 'camera',
    supDescription: 'Camera for content creation',
    description:
      "Our Canon is your ultimate companion for capturing stunning photos and videos. With its [key feature, e.g., high-resolution sensor, fast autofocus], you'll be able to capture every detail, from breathtaking landscapes to intimate portraits. Its sleek design and intuitive interface make it easy to use, while its durable build ensures it can withstand the rigors of everyday life.",
    category: 'Camera',
    imgUrl: camera1.src,
    price: '500',
    rate: 4.5,
    quantity: 1,
  },
  {
    id: '5',
    title: 'camera',
    supDescription: 'Camera for content creation',
    description:
      "Our Canon is your ultimate companion for capturing stunning photos and videos. With its [key feature, e.g., high-resolution sensor, fast autofocus], you'll be able to capture every detail, from breathtaking landscapes to intimate portraits. Its sleek design and intuitive interface make it easy to use, while its durable build ensures it can withstand the rigors of everyday life.",
    category: 'Camera',
    imgUrl: camera2.src,
    price: '600',
    rate: 4,
    quantity: 1,
  },
  {
    id: '6',
    title: 'camera',
    supDescription: 'Camera for content creation',
    description:
      "Our Canon is your ultimate companion for capturing stunning photos and videos. With its [key feature, e.g., high-resolution sensor, fast autofocus], you'll be able to capture every detail, from breathtaking landscapes to intimate portraits. Its sleek design and intuitive interface make it easy to use, while its durable build ensures it can withstand the rigors of everyday life.",
    category: 'Camera',
    imgUrl: camera3.src,
    price: '650',
    rate: 4,
    quantity: 1,
  },
  {
    id: '7',
    title: 'watch',
    supDescription: 'Watch for casual men',
    description:
      'Elevate your wrist with our [watch model]. This stylish timepiece combines classic design with cutting-edge technology. you can stay connected and active. Its [material, e.g., stainless steel, leather] band offers both comfort and durability, making it the perfect accessory for any occasion.',
    category: 'Watch',
    imgUrl: watch1.src,
    price: '300',
    rate: 4.5,
    quantity: 1,
  },
  {
    id: '8',
    title: 'watch',
    supDescription: 'Watch for casual men',
    description:
      'Elevate your wrist with our [watch model]. This stylish timepiece combines classic design with cutting-edge technology. you can stay connected and active. Its [material, e.g., stainless steel, leather] band offers both comfort and durability, making it the perfect accessory for any occasion.',
    category: 'Watch',
    imgUrl: watch2.src,
    price: '350',
    rate: 5,
    quantity: 1,
  },
  {
    id: '9',
    title: 'watch',
    supDescription: 'Watch for casual men',
    description:
      'Elevate your wrist with our [watch model]. This stylish timepiece combines classic design with cutting-edge technology. you can stay connected and active. Its [material, e.g., stainless steel, leather] band offers both comfort and durability, making it the perfect accessory for any occasion.',
    category: 'Watch',
    imgUrl: watch3.src,
    price: '200',
    rate: 3.5,
    quantity: 1,
  },
  {
    id: '10',
    title: 'backpack',
    supDescription: 'Your backpack for any trip',
    description:
      "It's a lifestyle. Designed to carry all your essentials with ease, this backpack features multiple compartments, spacious pockets, and a comfortable ergonomic design. Its durable construction and water-resistant materials ensure your belongings stay safe and dry, no matter where your adventures take you.",
    category: 'Backpack',
    imgUrl: backpack1.src,
    price: '150',
    rate: 5,
    quantity: 1,
  },
  {
    id: '11',
    title: 'backpack',
    supDescription: 'Your backpack for any trip',
    description:
      "It's a lifestyle. Designed to carry all your essentials with ease, this backpack features multiple compartments, spacious pockets, and a comfortable ergonomic design. Its durable construction and water-resistant materials ensure your belongings stay safe and dry, no matter where your adventures take you.",
    category: 'Backpack',
    imgUrl: backpack2.src,
    price: '120',
    rate: 5,
    quantity: 1,
  },
  {
    id: '12',
    title: 'backpack',
    supDescription: 'Your backpack for any trip',
    description:
      "It's a lifestyle. Designed to carry all your essentials with ease, this backpack features multiple compartments, spacious pockets, and a comfortable ergonomic design. Its durable construction and water-resistant materials ensure your belongings stay safe and dry, no matter where your adventures take you.",
    category: 'Backpack',
    imgUrl: backpack3.src,
    price: '100',
    rate: 4.5,
    quantity: 1,
  },
];
