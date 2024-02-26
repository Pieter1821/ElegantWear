import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 4fr);
    column-gap: 40px;
    row-gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }


`;
