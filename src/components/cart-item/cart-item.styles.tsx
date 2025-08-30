import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 12px;

  img { width: 64px; height: 64px; object-fit: cover; border-radius: 6px; }
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 6px;
  gap: 6px;

  span { font-size: 15px; }
`;
