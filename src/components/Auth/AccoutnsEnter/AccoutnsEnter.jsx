// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { auth } from 'FirebaseConfig';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from 'components/Common/Button';

import * as s from './AccoutnsEnter.styled';

const AccoutnsEnter = ({ setLoading }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const logInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Notify.success('Cool, you enter with Google account');
      navigate('/chat');
    } catch (error) {
      Notify.failure('Oops, something go wrong. Try later');
    } finally {
      setLoading(false);
    }
  };

  const logInWithFacebook = async () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Notify.success('Cool, you enter with Facebook account');
      navigate('/chat');
    } catch (error) {
      Notify.failure('Oops, something go wrong. Try later');
    } finally {
      setLoading(false);
    }
  };
  const logInWithGitHub = async () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Notify.success('Cool, you enter with GitHub account');
      navigate('/chat');
    } catch (error) {
      console.log(error);
      Notify.failure('Oops, something go wrong. Try later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <s.Container>
      <Button name={t('button.continueWithGoogle')} func={logInWithGoogle} />
      <Button
        name={t('button.continueWithFacebook')}
        func={logInWithFacebook}
      />
      <Button name={t('button.continueWithGitHub')} func={logInWithGitHub} />
    </s.Container>
  );
};

export default AccoutnsEnter;
