import React from 'react';
import styled from 'styled-components';

export const ErrorText = styled.p`
  background-color: var(--darkRed);
  width: 60%;
  align-self: center;
  border-radius: 1rem;
  padding: .5rem;
  font-size: 1.3rem;
  text-align: center;
  color: white;
`;

const Error = ({ text }) => {
  return <ErrorText>{text}</ErrorText>;
};

export default Error;
