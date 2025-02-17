import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../style/global.css";
import Layout from "./Layout";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Erorr from "./pages/Erorr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Whilist from "./pages/Wishlist";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Whilist" element={<Whilist />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Erorr" element={<Erorr />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
