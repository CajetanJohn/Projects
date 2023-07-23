import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = ({ amount, submit }) => {
  const [feedback, setFeedback] = useState();
  const [alreadyPaid, paid] = useState(false);

  const handleApprove = (orderId) => {
    paid(true);
    submit(alreadyPaid, feedback)
  };

  return (
    <PayPalButtons
      style={{ color: "white", tagline: false, shape: "pill" }}
      
      onClick={(data, actions) => {
      if (alreadyPaid) {
        setFeedback( "You have already paid, Chill out" );
        return actions.reject();
      }
      else { return actions.resolve(); } }
      }
      
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
          description:'You are making a payment to us of amount '+ amount/2,
          amount: { value: amount/2 } }]
        });
      }}
      
      onApprove={
      async (data, actions) => {
        const order = await actions.order.capture();
        setFeedback("Payment has been proccessed and received, you can continue below")
        handleApprove(data.orderID); }
      }
      
      onError={(err) => {
        setFeedback('ERROR! ERROR!' + err);
      }}
      
      onCancel={() => { 
        setFeedback('You have canceled the payment');
      } } />
  );
};
export default PaypalCheckoutButton;
