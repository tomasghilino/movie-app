import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 4rem;
`;
export const Title = styled.h1`
  margin: 2rem 0 2rem 0;
  text-align: center;
  font-size: 3rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: var(--darkRed);
    padding: 0.5rem;

    &:visited {
      color: var(--darkRed);
    }
  }
`;
