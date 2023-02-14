import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductFilter from "./components/ProductFilter";
import Home from "./routes/Home";
import About from "./routes/Home/About";
import HomeIndex from "./routes/Home/HomeIndex";
import NotFound from "./routes/Home/NotFound";
import Products from "./routes/Home/Products";
import ProductsIndex from "./routes/Home/Products/ProductsIndex";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home"/>} />
          <Route path="/home" element={<HomeIndex />}/>
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductsIndex />} />
            <Route path=":categoryName" element={<ProductFilter />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

