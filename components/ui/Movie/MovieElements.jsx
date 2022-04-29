import styled from 'styled-components';

export const MovieContainer = styled.div`
  height: 500px;
  background-color: red;
  position: relative;
  background: url(${(props) => props.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const MovieButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  button {
    padding: 1.2rem;
    font-size: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #0000008f;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }

    &:last-child {
      background-color: #ff00009a;
    }
  }
`;
