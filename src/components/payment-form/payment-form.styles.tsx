import styled from 'styled-components';
import Button from '../button/button';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;

  .__StripeElement {
    width: 100% !important;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
  margin-top: 12px;
  margin-right: 0;
  width: 140px;
  align-self: flex-start;
  }
`;
