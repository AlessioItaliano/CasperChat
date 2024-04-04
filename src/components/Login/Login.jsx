import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { auth } from '../../FirebaseConfig';

import Button from 'components/Button';

import * as s from './Login.styled';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Container from 'components/Container';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/chat');
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  const logInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/chat');
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
      await signInWithPopup(auth, provider);
      navigate('/chat');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const logInWithGitHub = async () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/chat');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <s.Container>
          {loading ? (
            <Loader />
          ) : (
            <>
              <s.Title>Welcome back</s.Title>
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
                <Button
                  name="Continue with Facebook"
                  func={logInWithFacebook}
                />
                <Button name="Continue with GitHub" func={logInWithGitHub} />
              </s.AccountsContainer>
            </>
          )}
        </s.Container>
      </Container>
    </Section>
  );
};

export default Login;
