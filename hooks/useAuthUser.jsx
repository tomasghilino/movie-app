import { useEffect, useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';

//firebase
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export const useAuthUser = () => {
  const { push, pathname } = useRouter();

  const { user, setUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

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

  const userRef = collection(db, 'user');
  useEffect(() => {
    onSnapshot(userRef, (snapshot) => {
      if (user) {
        const data = snapshot.docs.find(
          (userDoc) => userDoc.data().id === user.uid
        );
        setUserData({ id: data.id, ...data.data() });
      }
    });
  }, [user]);

  return { userData };
};
