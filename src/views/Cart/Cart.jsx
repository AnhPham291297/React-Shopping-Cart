import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import { addCart, delCart, delCartOnly, delCartAll } from "../../redux/action";
import "./cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let navigate = useNavigate();
  const state = useSelector((state) => state.handleCartReducer);
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState(state);

  useEffect(() => {
    setCartItems(state);
  }, [state]);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <Announcement />
      <Navbar />
      <div className="cart-items">
        <h2 className="cart-items-header">Your Bag</h2>

        <div className="cart-clear">
          <button className="cart-button-action" onClick={() => navigate('/products')}>Continue shopping</button>
          {cartItems.length >= 1 && (
            <button
              className="cart-button-action"
              onClick={() => dispatch(delCartAll())}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 && (
          <div className="cart-items-empty">No Items are add</div>
        )}

        {cartItems.length !== 0 && (
          <table className="table">
            <thead>
              <tr>

                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="cart-item-name">{item.name}</td>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "100px", height: "80px" }}
                        alt=""
                      />
                    </td>
                    <td>{(item.price / 1000).toFixed(2)} $</td>
                    <td style={{ textAlign: "center" }}>
                      <IconButton >
                        <RemoveIcon onClick={() => dispatch(delCart(item))} />
                      </IconButton>
                      <span style={{ margin: '0 5px' }}>{item.qty}</span>
                      <IconButton>
                        <AddIcon onClick={() => dispatch(addCart(item))} />
                      </IconButton>
                    </td>
                    <td>
                      {item.qty} * {(item.price / 1000).toFixed(2)} $
                    </td>
                    <td
                      style={{ textAlign: "center", cursor: "pointer" }}
                      onClick={() => dispatch(delCartOnly(item))}
                    >
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td style={{ fontWeight: '500' }}>Total Price:</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: '500' }}>{(totalPrice / 1000).toFixed(2)} $</td>
              </tr>
            </tbody>
          </table>
        )}

        <div className="cart-checkout">
          <button className="cart-button-action" onClick={() => navigate('/checkout')}>Check out</button>
        </div>
      </div>
    </>
  );
}
