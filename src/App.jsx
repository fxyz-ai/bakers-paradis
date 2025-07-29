import React,{useState} from 'react';
import './App.css'
import { Product } from './components/Product';
import { Footer } from './components/Footer';
import {Filter} from './components/Filter'
import {SearchBar} from './components/SearchBar'
import {Cart} from './components/Cart'

function App() {
  const [type,setType]=useState("all")
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems]=useState([])

  return (
    <>
      <div className='w-full flex flex-col items-center bg-yellow-400 shadow-inner h-100%'>
        <h1 className='text-6xl mt-6 mb-6 font-bold'>Baker's Paradis</h1>
        <div className='mb-2'>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className='m-4'>
          <Filter setType={setType} type={type}/>
        </div>
        <Product search={search} type={type} setCartItems={setCartItems} cartItems={cartItems}/>
        <Footer/>
      </div>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </>
  )
}

export default App