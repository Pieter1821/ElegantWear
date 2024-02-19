import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;

  @media screen and (min-width: 700px) {
    height: 10vh;
    flex-direction: row;
    justify-content: space-between; 
    margin-bottom: 2rem;
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 70px; // Fixed size for mobile
  padding: 1rem;

  @media screen and (min-width: 300px) {
    width: 15%; 
    padding: 0;
    flex-shrink: 0; 
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center; 

  @media screen and (min-width: 358px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }
`;

export const NavLink = styled(Link)`
  flex: 1;
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 358px) {
    padding: 0.5rem 1rem;
  }
`;

export const Icon = styled.div`
  @media screen and (max-width: 
700px) {
display: flex;
justify-content: center;
align-items: center;
}

@media screen and (min-width: 700px) {
display: none; 
}
`;