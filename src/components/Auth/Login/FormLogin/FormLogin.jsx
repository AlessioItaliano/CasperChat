import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'FirebaseConfig';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from 'components/Common/Button';

import * as s from './FormLogin.styled';
import Loader from 'components/Common/Loader';
import AccoutnsEnter from 'components/Auth/AccoutnsEnter';

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      Notify.success('Welcome back');
      navigate('/chat');
    } catch (error) {
      Notify.failure('Oops, something go wrong. Try later');
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <s.Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <s.Title>{t('logInTitle')}</s.Title>
          <s.Form onSubmit={handleSubmit} autoComplete="on">
            <s.Label>
              {t('email')}
              <s.Input type="email" name="email" autoComplete="on" />
            </s.Label>
            <s.Label>
              {t('password')}
              <s.Input type="password" name="password" autoComplete="on" />
            </s.Label>
            <s.Redirect>
              {t('goToRegisterPage')}{' '}
              <s.Link to="/register">{t('register')}</s.Link>
            </s.Redirect>
            <Button type={'submit'} name={t('button.logIn')} />
          </s.Form>
          <s.Title>---------- {t('or')} ---------</s.Title>
          <AccoutnsEnter setLoading={setLoading} />
        </>
      )}
    </s.Container>
  );
};

export default FormLogin;
