import { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  // onAuthStateChanged,
  FacebookAuthProvider,
} from 'firebase/auth';

import { auth } from '../../FirebaseConfig';

import Button from 'components/Button';

import * as s from './Login.styled';
import Loader from 'components/Loader';

const Login = () => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setUser(form.elements.email.value);
    console.log(form.elements.email.value);
    // dispatch(
    //   login({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  const logInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;
      setUser(user.displayName);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logInWithFacebook = async () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const user = result.user;
        setUser(user.displayName);
        console.log(user);
      } else {
        console.log('Користувач не ідентифікований');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <s.Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <s.Title>Welcome back</s.Title>
          <s.Title>{user}</s.Title>
          <s.Form onSubmit={handleSubmit} autoComplete="on">
            <s.Label>
              Email
              <s.Input type="email" name="email" autoComplete="on" />
            </s.Label>
            <s.Label>
              Password
              <s.Input type="password" name="password" autoComplete="on" />
            </s.Label>
            <Button type={'submit'} name={'Log In'} />
          </s.Form>
          <s.Title>----------------- or -----------------</s.Title>
          <s.AccountsContainer>
            <Button name="Continue with Google" func={logInWithGoogle} />
            <Button name="Continue with Facebook" func={logInWithFacebook} />
            <Button name="Log out" func={signOut} />
          </s.AccountsContainer>
        </>
      )}
    </s.Container>
  );
};

export default Login;
