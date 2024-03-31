import { useEffect, useState } from 'react';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import * as s from './Header.styled';
// import { useContext } from 'react';
// import { Context } from 'index';
// import { useAuthState } from 'react-firebase-hooks/auth';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
// import {
//   // doc,
//   // setDoc,
//   getFirestore,
//   // getDoc,
//   // onSnapshot,
// } from 'firebase/firestore';
import { auth } from '../../firebase';

// const db = getFirestore(app);

const Header = () => {
  const [user, setUser] = useState(null);
  // const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const logIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <s.Header>
      <s.Container>
        {user ? (
          <>
            <p>Ciao, {user.displayName}</p>
            <Button name="Sign out" func={signOut} />
            <NavLink to="/chat">
              <Button name="chat" />
            </NavLink>
            <NavLink to="/login">
              <Button name="login" />
            </NavLink>
          </>
        ) : (
          <NavLink to="/">
            <Button name="Log in" func={logIn} />
          </NavLink>
        )}
      </s.Container>
    </s.Header>
  );
};

export default Header;
