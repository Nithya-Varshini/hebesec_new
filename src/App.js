import './App.css';
import About from './components/about/about';
import Services from './components/services/services';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
         {/* <Route path='/store/:LinkCategory?' element={<Store storeData={storeData} setStoreData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/checkout' element={<Checkout products={storeData?.products} fetchStoreData={fetchStoreData} />} />
          <Route path='/booking' element={<Booking />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
