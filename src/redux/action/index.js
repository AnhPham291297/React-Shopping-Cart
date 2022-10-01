// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item From  Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const delCartOnly = (product) => {
  return {
    type: "DELITEMONLY",
    payload: product,
  };
};

export const delCartAll = (product) => {
  return {
    type: "DELITEMALL",
    payload: product,
  };
};
