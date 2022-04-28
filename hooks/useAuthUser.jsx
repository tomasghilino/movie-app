import { useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';

export const useAuthUser = () => {
  const { push, pathname } = useRouter();

  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser(user);
        // if user is logged and wants to go to:
        if (pathname === '/login' || pathname === '/signup') {
          push('/');
        }
      } else {
        setUser(null);

        if (pathname === '/') {
          push('/login');
        }
      }
    });
  }, []);
};
