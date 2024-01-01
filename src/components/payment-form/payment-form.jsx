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
      console.error('Stripe or Elements not available.');
      return;
    }

    try {
      const paymentIntentEndpoint = '/.netlify/functions/create-payment-intent';

      const response = await fetch(paymentIntentEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 10000 }),
      });

      if (!response.ok) {
        throw new Error(error);
      }

      const responseData = await response.json();
      console.log('Response data:', responseData);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <label>
          Card Details
          <CardElement />
        </label>
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
