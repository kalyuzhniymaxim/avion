import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home  from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './scss/app.scss';




function App() {
const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          
          <Routes>
            <Route path='' element={<Home searchValue={searchValue}/>} />
            <Route path='*' element={<NotFound />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
            

        </div>
      </div>
    </div>
  );
}

export default App;
