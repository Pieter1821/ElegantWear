import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe or Elements not available');
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());
    console.log(response);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onScroll={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};