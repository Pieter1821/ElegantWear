import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.04);

  @media screen and (max-width: 800px) {
    height: auto;
  padding: 8px 12px;
  margin-bottom: 8px;
  flex-direction: column;
  gap: 6px;
  }

  /* make Menubar compact and touch friendly */
  .p-menubar {
    width: 100%;
  }
  .p-menubar .p-menubar-start, .p-menubar .p-menubar-end {
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 70px; 
  padding: 0.5rem;

  @media screen and (max-width: 800px) {
  width: 48px; 
  height: 48px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center; 

@media screen and (max-width: 800px){
  width:100%;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  font-size: 14px;
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