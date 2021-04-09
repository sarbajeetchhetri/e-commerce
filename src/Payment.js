import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from "./axios";


const Payment = () => {
  const [{ basket, user }, disptach] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing , setProcessing ] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
  // Special Stripe Secret generate garxa which allows us to charge a customer
  const getclientSecret = async()=> {
    const response = await axios({
      method: "post",
      url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    });
    setclientSecret(response.data.clientSecret)
  }

  getclientSecret();

  }, [basket])


  const handleSubmit = async(event) => {
    //   doing all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=> {
      // paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null)
      setProcessing(false);

      history.replace("/orders")
    } ) 


  };

  const handleChange = (event) => {
    //   Listne for changes in the CardElement

    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : " ");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>

        {/* Payment Section for- delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angles, CA</p>
          </div>
        </div>

        {/* Payment section for - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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

        {/* Payment Section for - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Payment through Stripe Method */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded} >
                <span>{processing ? <p> Processing</p> : "Buy Now" }</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
