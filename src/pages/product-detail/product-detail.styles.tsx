import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const Image = styled.img`
  width: 420px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 900px) { width: 100%; }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 28px;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Actions = styled.div`
  margin-top: 18px;
`;
