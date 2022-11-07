
import React from 'react';
import Add from './Components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';

const App = () => {
  const [items, setItems] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=18")
    setItems(response.data.products);
  }
  if (items.length < 1) {
    fetchProducts();
  }
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home data={items} />}>
            <Route path='/add-product' element={<Add setData={setItems} data={items}  /> } />
          </Route>
        </Routes>


      </BrowserRouter>


    </>

  );
}
export default App;
