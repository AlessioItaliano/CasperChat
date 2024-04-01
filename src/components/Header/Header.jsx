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
import { auth } from '../../FirebaseConfig';

import { IoLogoSnapchat } from 'react-icons/io';

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
      <div>
        <IoLogoSnapchat />
        CasperCHAT
      </div>
      <s.Container>
        {user === null ? (
          <s.Link to="/login">Enter</s.Link>
        ) : (
          <s.UserContainer>
            <s.UserName>Welcome, {user.displayName}</s.UserName>
            <Button func={signOut} name={'Logout'} type={'button'} />
          </s.UserContainer>
        )}

        {/* {user ? (
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
        )} */}
      </s.Container>
    </s.Header>
  );
};

export default Header;
