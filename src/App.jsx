import { useState } from 'react';

import Item from './components/Item';

const products = [
  { name: 'Apfel', price: 0.99, id: 0 },
  { name: 'Banane', price: 1.29, id: 1 },
  { name: 'Orange', price: 0.89, id: 2 },
  { name: 'Birne', price: 1.49, id: 3 },
  { name: 'Weintrauben', price: 2.99, id: 4 },
  { name: 'Ananas', price: 3.99, id: 5 },
  { name: 'Mango', price: 1.79, id: 6 },
  { name: 'Erdbeeren', price: 2.49, id: 7 },
  { name: 'Kirschen', price: 4.99, id: 8 },
  { name: 'Blaubeeren', price: 3.49, id: 9 },
];

function App() {
  const [cart, setCart] = useState([{ id: 1 }]);

  console.log(cart);
  function handleAddToCart(id) {
    setCart(cart => {
      const isInCart = cart.some(item => item.id === id);
      const itemToAdd = products.find(product => product.id === id);

      if (isInCart) {
        return cart.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...cart, { ...itemToAdd, quantity: 1 }];
      }
    });
  }
  return (
    <div className="container">
      {products.map(product => (
        <Item name={product.name} price={product.price} key={product.id} id={product.id} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default App;
