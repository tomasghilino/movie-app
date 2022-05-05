import React, { useContext } from 'react';
import Link from 'next/link';
import { Nav, NavTitle, NavItemsWrapper } from './NavigationElements';
import AuthContext from '../../../context/AuthContext';
import { useAuthUser } from '../../../hooks/useAuthUser';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';

const Navigation = () => {
  useAuthUser(); // checks all the time auth state
  const { user } = useContext(AuthContext); // actually the state of the user

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Nav>
      <Link href="/">
        <NavTitle>
          Movie<span>App</span>
        </NavTitle>
      </Link>

      <NavItemsWrapper>
        {user != null ? (
          <>
            <Link href="/favorites">Favorites</Link>
            <Link href="/">My List</Link>
            <a href="/" onClick={signOutUser}>
              Sign Out
            </a>
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
