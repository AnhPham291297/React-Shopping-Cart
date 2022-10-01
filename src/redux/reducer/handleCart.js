import { toast } from "react-toastify";

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product if Already Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        toast("Add sucessfully!");
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "DELITEMONLY":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2) {
        toast("Delete sucessfully!");
        return state.filter((x) => x.id !== exist2.id);
      }

      break;
    case "DELITEMALL":
      return (state = []);

    default:
      return state;
  }
};

export default handleCart;
