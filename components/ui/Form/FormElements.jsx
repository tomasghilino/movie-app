import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: 1.5rem;

  input {
    padding: 1.2rem;
    border: none;
    border-radius: 1rem;
    font-family: var(--roboto);
    font-size: 1.5rem;
  }

  input:focus {
    outline: none;
  }
  button {
    padding: 1.5rem;
    width: 30rem;
    margin: 1.2rem auto;
    font-size: 2rem;
    font-family: var(--roboto);
    border-radius: 0.5rem;
    border: none;
    background-color: var(--darkRed);
    color: var(--white);

    transition: background-color 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #b20909;
    }
  }
`;
