import React from 'react';
import Link from 'next/link';
import { Nav, NavTitle, NavItemsWrapper } from './NavigationElements';

const Navigation = () => {
  const loggedIn = false;
  return (
    <Nav>
      <Link href="/">
        <NavTitle>
          Movie<span>App</span>
        </NavTitle>
      </Link>

      <NavItemsWrapper>
        {loggedIn ? (
          <>
            <Link href="/">Favorites</Link>
            <Link href="/">My List</Link>
            <Link href="/">Sign Out</Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </>
        )}
      </NavItemsWrapper>
    </Nav>
  );
};

export default Navigation;
