import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr 320px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.main`
  background: #ffffff;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(18, 38, 63, 0.06);

  h1 {
    margin: 0 0 0.25rem;
  }

  .muted {
    color: #6b7280;
    margin-bottom: 1rem;
  }
  .stepper {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .step {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 0.6rem;
    border-radius: 999px;
    border: 1px solid transparent;
    background: #f3f4f6;
    color: #374151;
    cursor: pointer;
    font-weight: 600;
  }

  .step.active {
    background: #0ea5a6;
    color: white;
  }

  .step .num {
    background: rgba(255,255,255,0.18);
    padding: 0.15rem 0.4rem;
    border-radius: 6px;
    font-weight: 700;
  }

  .shipping-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .shipping-form label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
  }

  .shipping-actions, .review-actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  .primary, .secondary {
    padding: 0.6rem 0.9rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  .primary { background: #0ea5a6; color: #fff; }
  .secondary { background: transparent; border: 1px solid #d1d5db; }

  @media screen and (max-width: 700px) {
    .shipping-form { grid-template-columns: 1fr; }
    .shipping-actions { flex-direction: column-reverse; }
  }
`;

export const RightColumn = styled.aside`
  position: relative;
`;

export const OrderSummary = styled.section`
  position: sticky;
  top: 1rem;
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(18, 38, 63, 0.06);

  h3 {
    margin-top: 0;
  }

  .summary-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .summary-item img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 4px;
  }

  .summary-meta {
    flex: 1;
  }
`;

export const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #374151;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-top: 1px solid #e5e7eb;
  margin-top: 0.75rem;
  font-size: 1.05rem;
`;
