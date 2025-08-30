import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    margin-bottom: 6px;
    transition: opacity 180ms ease-in-out;
  }
    /* price badge in corner */
    .price-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: linear-gradient(180deg,#ff9f43,#ff6b00);
      color: white;
      padding: 6px 10px;
      border-radius: 6px;
      font-weight: 700;
      box-shadow: 0 6px 16px rgba(0,0,0,0.12);
      z-index: 10;
    }
  /* Ensure any button (including PrimeReact .p-button) stays inside the card and doesn't overlap the image */
  button,
  .p-button {
    width: 85%;
    opacity: 0.98;
    position: relative; /* keep inside normal flow */
    margin: 12px auto 18px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  /* prevent the button label from wrapping to multiple lines */
  .p-button .p-button-label,
  button > span {
    white-space: nowrap;
  }

  &:hover {
    img { opacity: 0.95; }
  }

  @media screen and (max-width: 900px) {
  height: auto;
  padding-bottom: 12px;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

