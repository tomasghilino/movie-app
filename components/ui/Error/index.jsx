import React from 'react';
import styled from 'styled-components';

export const ErrorText = styled.p`
  background-color: var(--darkRed);
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;

const Error = ({ text }) => {
  return <ErrorText>{text}</ErrorText>;
};

export default Error;
