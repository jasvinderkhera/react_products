import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from "./components/ProductDetail";
import CategoryWise from "./components/CategoryWise";

function App() {
  return (
 <BrowserRouter>
 <Routes>
  {/* <Route path="/" element={<Home/>}/> */}
  <Route path="/" element={<Products/>}/>
  <Route path="/products/:id" element={<ProductDetail/>}/>
  <Route path="/products/category/:id" element={<CategoryWise/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
