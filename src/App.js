import React, { useState } from 'react';
import './App.css';
import Routes from './components/Routes';

function App() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  const addToCart = (num) => {
    setNumOfItemsInCart(numOfItemsInCart + num);
  }


  return (
    <div className="App">
      <Routes
        addItems={addToCart}
        numInCart={numOfItemsInCart} />
    </div>
  );
}

export default App;
