import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";





const promise = loadStripe("pk_test_51IQSRZFHfrWVZsa3ywgXd31nGPAYarK410Yc4q4s9MVMr74hkN50zEDw49GNAc4laxjItYHSPtmCpd1sQ0vJdcdI00Yqi8ANBA");


function App() {
  const [{}, disptach] = useStateValue();
  useEffect(() => {
    
 
    // will only run once when the app component loads.....

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser );

      if (authUser) {
        // The use just logged in/ the user was logged in
        disptach({
          type: "SET_USER",
          user:authUser
        })

      } else{
        // the user is logged out
      disptach({
        type: "SET_USER",
        user: null
      })

      }

    })

  }, [])


  return (
    // BEM convenction
    <Router>
      <div className="app">
      
        <Switch>

        
        <Route path="/login">
         <Login/>
          </Route>

        <Route path="/checkout">
            <Header  />
            <Checkout />
          </Route>

        <Route path="/payment">
            <Header  />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            
          </Route>

          <Route path="/">
            <Header  />
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
