import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ProductVegitable from "./component/ProductVegitable.jsx";
import Spices from "./pages/Spices.jsx";
import Product from "./pages/Product.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Sustainability from "./pages/Sustainability.jsx";
import Quality from "./pages/Quality.jsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Achivement from "./pages/Achivement.jsx";

function App() {

  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/vegitable" element={<ProductVegitable/>}/>
      <Route path="/spices" element={<Spices/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/sustainability" element={<Sustainability/>}/>
      <Route path="/achivement" element={<Achivement/>}/>

      <Route path="/quality" element={<Quality/>}/>
      
    </Routes>

    <Footer/>
    </BrowserRouter>

    
  )
}

export default App
