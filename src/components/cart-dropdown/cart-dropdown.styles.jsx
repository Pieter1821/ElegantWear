import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: fixed;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 0;
  z-index: 30;
  opacity: 0.8;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media (max-width: 500px) {
    width: 90%;
    top: 120px;
    right: 0;
  }

  @media screen and (min-width: 600px) {
    top: 50px;
    right: 50px;
  }

  @media screen and (min-width: 504px) {
    max-width: 100%;
  }

  @media screen and (min-width: 250px) {
    top: 120px;
    width: 190px;
    right: 50px;
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
