import React, { useState } from 'react';

import './App.css';
import { Product, Products } from './components/products';
import { product1, productsData } from './components/productsData';

function App() {
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fani Kauppa</h1>
      </header>
      <div className="container">
        <button onClick={()=>setShowProduct(!showProduct)}>{showProduct ? "piilota":"näytä"}tuote</button>
        {showProduct && <Products products={productsData}/>}
      </div>
    </div>
  );
}

export default App;
