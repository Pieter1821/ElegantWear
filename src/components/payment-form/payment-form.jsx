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
      console.error('Stripe or Elements not initialized');
      return;
    }

    try {
      // Call  serverless function to create a payment intent
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 10000 }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const paymentIntent = await response.json();

      // Confirm the payment on the client side
      const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
        // Handle payment error
      } else if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded');
        // Handle payment success
      }
    } catch (error) {
      console.error('Error:', error.message);
      
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
