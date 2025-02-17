export const getStoredcart = () => {
  const storedCartstring = localStorage.getItem("cart");
  if (storedCartstring) {
    return JSON.parse(storedCartstring);
  }
  return [];
};

const saveCartTols = (cart) => {
  const cartStirinfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStirinfied);
};

export const addTols = (id) => {
  const cart = getStoredcart();
  cart.push(id);
  //save to local storage
  saveCartTols(cart);
};
