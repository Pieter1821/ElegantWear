import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 140px;
  height: 44px;
  padding: 0 20px;
  font-size: 14px;
  background: linear-gradient(135deg,#222,#444);
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(34,34,34,0.12);
  transition: transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(34,34,34,0.14);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background: linear-gradient(135deg,#4285f4,#2a66d6);
  color: white;
`;

export const InvertedButton = styled(BaseButton)`
  background: white;
  color: #111;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: none;
  &:hover { transform: translateY(-1px); }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 20px;
  height: 20px;
 

`
