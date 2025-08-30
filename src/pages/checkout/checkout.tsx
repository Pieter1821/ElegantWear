import { memo } from 'react';
import {
  CheckoutContainer,
  LeftColumn,
  RightColumn,
  OrderSummary,
  SummaryRow,
  SummaryTotal,
  ItemsList,
} from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { PaymentForm } from '../../components/payment-form/payment-form';
import { formatZAR } from '../../utils/currency';
import { useState } from 'react';

import React from 'react';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [step, setStep] = useState(0);

  return (
    <CheckoutContainer>
      <LeftColumn>
        <div className="stepper">
          {['Shipping', 'Review', 'Payment'].map((s, i) => (
            <button
              key={s}
              type="button"
              aria-current={i === step}
              className={`step ${i === step ? 'active' : ''}`}
              onClick={() => setStep(i)}
            >
              <span className="num">{i + 1}</span>
              <span className="label">{s}</span>
            </button>
          ))}
        </div>
        <h1>Checkout</h1>
        <p className="muted">Secure checkout — enter shipping details and payment information.</p>

        <hr />

        {step === 0 && (
          <section aria-labelledby="shipping-heading">
            <h2 id="shipping-heading">Shipping</h2>
            <form className="shipping-form" onSubmit={(e) => { e.preventDefault(); setStep(1); }}>
              <label>
                Full name
                <input name="fullName" required />
              </label>
              <label>
                Address
                <input name="address" required />
              </label>
              <label>
                City
                <input name="city" required />
              </label>
              <div className="shipping-actions">
                <button type="button" className="secondary" onClick={() => window.history.back()}>Cancel</button>
                <button type="submit" className="primary">Continue to review</button>
              </div>
            </form>
          </section>
        )}

        {step === 1 && (
          <section aria-labelledby="review-heading">
            <h2 id="review-heading">Review items</h2>
            {cartItems.length === 0 ? <p>Your cart is empty</p> : cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="review-actions">
              <button type="button" className="secondary" onClick={() => setStep(0)}>Back</button>
              <button type="button" className="primary" onClick={() => setStep(2)}>Continue to payment</button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section aria-labelledby="payment-heading">
            <h2 id="payment-heading">Payment</h2>
            <p className="muted">Enter card details in the order summary panel and click Pay Now.</p>
          </section>
        )}
      </LeftColumn>

      <RightColumn>
        <OrderSummary aria-label="Order summary">
          <h3>Order summary</h3>
          <ItemsList>
            {cartItems.map((it) => (
              <li key={it.id} className="summary-item">
                <img src={it.imageUrl} alt={it.name} />
                <div className="summary-meta">
                  <div className="name">{it.name}</div>
                  <div className="qty">{it.quantity} x {formatZAR(it.price)}</div>
                </div>
                <div className="line-total">{formatZAR(it.quantity * it.price)}</div>
              </li>
            ))}
          </ItemsList>

          <SummaryRow>
            <span>Subtotal</span>
            <span>{formatZAR(cartTotal)}</span>
          </SummaryRow>

          <SummaryRow>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </SummaryRow>

          <SummaryTotal>
            <span>Total</span>
            <strong>{formatZAR(cartTotal)}</strong>
          </SummaryTotal>

          <PaymentForm />
        </OrderSummary>
      </RightColumn>
    </CheckoutContainer>
  );
};

export default Checkout;
