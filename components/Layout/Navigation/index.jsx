import React from 'react';
import Link from 'next/link';
import { Nav, NavTitle, NavItemsWrapper, NavLink } from './NavigationElements';

const Navigation = () => {
  return (
    <Nav>
      <NavTitle>
        Movie<span>App</span>
      </NavTitle>

      <NavItemsWrapper>
        <Link href="/">Favorites</Link>
        <Link href="/">My List</Link>
        <Link href="/">Login</Link>
        <Link href="/">Sign Up</Link>
      </NavItemsWrapper>
    </Nav>
  );
};

export default Navigation;
