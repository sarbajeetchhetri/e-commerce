import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"



const Checkout = () => { 
  const [{basket, user}, disptach] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
          alt="checkout ad"
        />
        <div>
            <h3>Hello, {user?.email} </h3>
            <h2 className="chekout__title">
                Your Shopping Basket
            </h2>
            {basket.map(item=> (
              <CheckoutProduct 

                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}



                


              />
            ))}
            
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
