import { useContext } from "react";
import { CartContext } from "../../cartContext/cart.jsx";
import Sidebar from "../aisidbr.jsx";
import Catogori from "../Catogori.jsx";
import Delivery from "../Delivery.jsx";
import Experience from "../Experience.jsx";
import Explore from "../Explore.jsx";
import Feature from "../feature.jsx";
import Navsec from "../nav_sec.jsx";
import Product from "../Product.jsx";
import Today from "../Today.jsx";

export default function Home() {
  const { cartLength, wishlistItems } = useContext(CartContext);

  return (
    <>
      <Navsec
        activh="active"
        size={cartLength}
        wishItems={wishlistItems.length}
        homenoti="homenoti"
      />
      <Sidebar />
      <Today />
      <Catogori />
      <Product />
      <Experience />
      <Explore />
      <Feature />
      <Delivery />
    </>
  );
}
