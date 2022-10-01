import { createStore } from "redux";
import rootReducers from "./reducer";

// convert object to string and store in localStorage
function saveToLocaStorage(state) {
  try {
    const productItem = JSON.stringify(state);
    localStorage.setItem("productLocal", productItem);
  } catch (error) {
    console.warn(error);
  }
}

// loading string from localStorage and convert back in to an Object invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const productItem = localStorage.getItem("productLocal");
    if (productItem === null) return undefined;
    return JSON.parse(productItem);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
}

const store = createStore(rootReducers, loadFromLocalStorage());

console.log(store.getState());

// listen for store changes and use saveToLocaStorage to save them to localStorage
store.subscribe(() => saveToLocaStorage(store.getState()));

export default store;
