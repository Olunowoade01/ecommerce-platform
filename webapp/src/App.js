import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-platform-j4ve.onrender.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;