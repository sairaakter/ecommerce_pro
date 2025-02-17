import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./cartContext/cart.jsx";
import App from "./component/App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
