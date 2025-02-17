import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Ensure initial state is always an array, not null
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedCartt = localStorage.getItem("wishlistItems");
    return savedCartt ? JSON.parse(savedCartt) : [];
  });

  const [couponCode, setCouponCode] = useState(""); // Stores applied coupon
  const [discount, setDiscount] = useState(0); // Stores discount %

  const shippingFee = 5; // Flat shipping fee

  // ✅ Wishlist-এ অ্যাড করবে
  const WishToCart = (item) => {
    const isItemInWish = wishlistItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish) {
      return setWishlistItems(wishlistItems);
    } else {
      setWishlistItems([...wishlistItems, { ...item, amount: 1 }]);
    }
  };

  // ✅ Remove one wish item
  const removeFromWish = (item) => {
    const isItemInWish = wishlistItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish.amount === 1) {
      setWishlistItems(
        wishlistItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setWishlistItems(
        wishlistItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        )
      );
    }
  };
  // ✅ Move all wishlist items to cart
  const moveAllToCart = () => {
    const updatedCart = [...cartItems];

    wishlistItems.forEach((item) => {
      const isItemInCart = updatedCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (!isItemInCart) {
        updatedCart.push({ ...item, amount: 1 });
      }
    });

    setCartItems(updatedCart);
    setWishlistItems([]); // Clear wishlist after moving items
  };
  // ✅ Add to cart function
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      return setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, { ...item, amount: 1 }]);
    }
  };
  // ✅ ADD one quantity
  const addFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, amount: 1 }]);
    }
  };
  // ✅ Remove one quantity
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart.amount === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        )
      );
    }
  };

  // Completely remove item from cart
  const deleteItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  // ✅ Get total price
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return total + price * (parseInt(item.amount) || 0);
    }, 0);
  };
  // ✅ Apply Coupon Function
  const applyCoupon = (code) => {
    if (code === "10") {
      setDiscount(10);
      setCouponCode(code);
      alert("Coupon applied! 10% discount.");
    } else if (code === "20") {
      setDiscount(20);
      setCouponCode(code);
      alert("Coupon applied! 20% discount.");
    } else {
      setDiscount(0);
      setCouponCode("");
      alert("Invalid coupon code.");
    }
  };

  // ✅ Get cart length
  const cartLength = cartItems.reduce((total, item) => total + item.amount, 0);

  const subtotal = getCartTotal();
  const discountAmount = (subtotal * discount) / 100;

  // ✅ Grand total (cart total + shipping fee)
  const grandTotal = getCartTotal() > 0 ? getCartTotal() + shippingFee : 0;

  // ✅ Save cart to localStorage **only when cartItems change**
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  // ✅ Save Wish to localStorage **only when wishlistItems change**
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    const wishlistItems = localStorage.getItem("wishlistItems");
    if (wishlistItems) {
      setWishlistItems(JSON.parse(wishlistItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addFromCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        deleteItemFromCart,
        cartLength,
        shippingFee,
        grandTotal,
        discount,
        discountAmount,
        applyCoupon,
        couponCode,
        setCouponCode,
        WishToCart,
        wishlistItems,
        removeFromWish,
        moveAllToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
