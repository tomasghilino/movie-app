import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  padding: 1.5rem;

  h1 {
  }
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 2rem;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: var(--white);
    &:hover {
      color: #c2c2c2;
    }
    transition: color 0.4s;
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
`;
