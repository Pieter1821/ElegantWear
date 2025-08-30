import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;

  h2 {
    margin: 10px 0 6px;
  }

  .p-field {
    margin-bottom: 1rem;
  }

  .p-button {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;

    .p-button {
      width: 100%;
    }
  }
`;
