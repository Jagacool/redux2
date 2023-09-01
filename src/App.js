import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './actions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Cartitem from './Cartitem';

function App() {
  const products = [
    {
      id : 1,
      title: "iphone",
      currency: "Rs.",
      price: 1000000
    },
    {
      id : 2,
      title: "Oneplus",
      currency: "Rs.",
      price: 80000
    },
    {
      id : 3,
      title: "Vivo",
      currency: "Rs.",
      price: 60000
    },
    {
      id : 4,
      title: "Oppo",
      currency: "Rs.",
      price: 40000
    },
    {
      id : 5,
      title: "Realme",
      currency: "Rs.",
      price: 20000
    },
    {
      id : 6,
      title: "ipad",
      currency: "Rs.",
      price: 10000
    }
  ];

 const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row">
          {/* ... your product cards ... */}
        </div>
      </div>
      <div className="col-lg-4">
        {cart.length === 0 ? (
          <h1>No Item's in Cart</h1>
        ) : (
          <div className="row">
            <ol className="list-group list-group-numbered">
              {cart.map((CARTITEM) => (
                <Cartitem
                  key={CARTITEM.id}
                  CARTITEM={CARTITEM}
                  removeFromCart={() => dispatch(removeFromCart(CARTITEM))}
                  increaseQuantity={() => dispatch(increaseQuantity(CARTITEM))}
                  decreaseQuantity={() => dispatch(decreaseQuantity(CARTITEM))}
                ></Cartitem>
              ))}
            </ol>
            <h3>Total: Rs {total}.</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
