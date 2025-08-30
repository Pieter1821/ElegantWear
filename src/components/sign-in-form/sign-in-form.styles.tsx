import styled from 'styled-components';

export const SignInContainer = styled.div`
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

  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;

  .p-button {
    white-space: nowrap;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;

    .p-button {
      width: 100%;
    }
  }
`;
