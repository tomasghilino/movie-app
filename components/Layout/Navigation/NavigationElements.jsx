import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 1.5rem;
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 2rem;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: var(--white);
    align-self: center;
    &:hover {
      color: #c2c2c2;
    }
    transition: color 0.4s;
  }

  a:last-child {
    background-color: var(--darkRed);
    padding: 1.2rem;
    border-radius: 1.2rem;
  }
`;
export const NavTitle = styled.h1`
  color: #bc0f0f;
  font-size: 5rem;
  font-weight: 500;
  margin-left: 2rem;

  span {
    color: #b30d0d;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;
