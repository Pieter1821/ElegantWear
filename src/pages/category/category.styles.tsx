import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  row-gap: 20px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px
`;
