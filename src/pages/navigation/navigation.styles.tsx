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

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom:20px
  }
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 70px; 
  padding: 1rem;

  @media screen and (max-width: 800px) {
    width: 50px; 
    padding: 0;
  
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center; 

@media screen and (max-width: 800px){
width:80%;
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

  @media screen and  (min-width: 300px) {
    padding: 0.5rem 1rem;
  }
`;

export const Icon = styled.div`
  @media screen and (max-width: 
800px) {
display: flex;
justify-content: center;
align-items: center;
}


`;