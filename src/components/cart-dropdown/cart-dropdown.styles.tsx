import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: fixed;
  right: 24px;
  top: 72px;
  width: 320px;
  max-width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  z-index: 60;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media (max-width: 500px) {
  width: calc(100% - 48px);
  right: 24px;
  top: 110px;
  }

  @media screen and (min-width: 600px) {
  top: 60px;
  right: 24px;
  }

  @media screen and (min-width: 504px) {
    max-width: 100%;
  }

  @media screen and (min-width: 250px) {
  max-width: 360px;
  }
`;

export const ToggleButton = styled.div`
  display: none;

  @media screen and (max-width: 504px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 20px;
    cursor: pointer;
    z-index: 15;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 16px;
  margin: 30px auto;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin: 20px auto;
  }

  @media screen and (max-width: 250px) {
    font-size: 12px;
  }
`;

export const CartItems = styled.div`
  max-height: 150px;
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    max-height: 100px;
  }

  @media screen and (min-width: 250px) {
    max-height: 80px;
  }
`;
