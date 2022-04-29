import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  z-index: 2;
  width: 100%;
  background: var(--navgradient);
  border-bottom: 2px solid var(--gray);
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 2rem;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: var(--bright);
    align-self: center;
    &:hover {
      color: var(--white);
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
  color: var(--primary);
  font-size: 4rem;
  font-weight: 500;
  margin-left: 2rem;

  span {
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(125%);
  }
`;
