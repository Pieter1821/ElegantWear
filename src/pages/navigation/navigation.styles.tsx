import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px;

  @media screen and (min-width: 700px) {
    height: 60px;
    flex-direction: row;
    margin-bottom: 20px;
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 100%;
  padding: 15px;

  @media screen and (min-width: 300px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
  height: auto; 
  display: flex;
  flex-direction: column; 
  gap: 10px; 

  @media screen and (min-width: 358px) {
    flex-direction: row; 
    justify-content: center; 
  }

  @media screen and (min-width: 700px) {
    width: auto;
    flex-direction: row;
    justify-content: flex-end; 
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;

  @media screen and (min-width: 358px) {
    padding: 10px; 
  }
`;

export const Icon = styled.div`
  display: none; 

  @media screen and (max-width: 358px) {
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; 
  }
`;
