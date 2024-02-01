import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button';
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';
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

      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const { client_secret } = data.paymentIntent;

      const cardDetails = elements.getElement(CardElement);

      if (!ifValidCardElement(cardDetails)) return;




      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            // Convert null to undefined or a default string value
            name: currentUser && currentUser.displayName !== null ? currentUser.displayName : 'Guest',
          },
        },
      });


      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('Payment Successful');
        }
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
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isPaymentProcessing}
          disabled={isPaymentProcessing}> {/* Disable button during processing */}
          Pay Now
        </PaymentButton>

      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
