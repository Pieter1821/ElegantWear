import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { FormEvent } from 'react';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!stripe || !elements) {
        return;
      }

      setIsPaymentProcessing(true);

      const paymentEndpoint = '/.netlify/functions/create-payment-intent';
      let response: Response;

      try {
        response = await fetch(paymentEndpoint, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          // Stripe expects amount in smallest currency unit (cents). Ensure integer.
          body: JSON.stringify({ amount: Math.max(0, Math.round(amount * 100)) }),
        });
      } catch (networkErr) {
        console.error('Network error when calling payment endpoint:', networkErr);
        alert('Payment server is not reachable. To test payments locally run the functions or configure the endpoint.');
        setIsPaymentProcessing(false);
        return;
      }

      if (!response.ok) {
        if (response.status === 404 && import.meta.env.DEV) {
          // Offer simulated success in dev only
          // eslint-disable-next-line no-alert
          const simulate = confirm('Payment endpoint not found (404). Simulate successful payment for local development?');
          if (simulate) {
            alert('Simulated payment successful (development only).');
            setIsPaymentProcessing(false);
            return;
          }
        }

        console.error('Payment endpoint error, status:', response.status);
        alert(`Payment server error: ${response.status}`);
        setIsPaymentProcessing(false);
        return;
      }

  const data = await response.json();
  const { paymentIntent } = data || {};
  const client_secret = paymentIntent?.client_secret ?? paymentIntent?.clientSecret ?? null;

      if (!client_secret) {
        console.error('Payment intent missing client_secret in response', data);
        alert('Payment server returned an unexpected response.');
        setIsPaymentProcessing(false);
        return;
      }

      const cardDetails = elements.getElement(CardElement);

      if (!ifValidCardElement(cardDetails)) {
        alert('Card details not available. Please check the payment form.');
        setIsPaymentProcessing(false);
        return;
      }




      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser && (currentUser as any).displayName ? (currentUser as any).displayName : 'Guest',
          },
        },
      });


      if ((paymentResult as any).error) {
        alert((paymentResult as any).error.message || 'Payment failed');
      } else if ((paymentResult as any).paymentIntent && (paymentResult as any).paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      } else {
        alert('Payment processing returned an unexpected result.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 12 }}>
          <Button
            label={`Pay Now ${amount ? ` (${amount.toFixed(2)})` : ''}`}
            onClick={undefined}
            loading={isPaymentProcessing}
            disabled={isPaymentProcessing || !amount}
            type="submit"
          />
          {!amount && <span style={{ color: '#b91c1c' }}>Cart total is zero</span>}
        </div>

      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
