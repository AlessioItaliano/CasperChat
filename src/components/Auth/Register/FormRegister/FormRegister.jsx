import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from 'FirebaseConfig';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from 'components/Common/Button';

import * as s from './FormRegister.styled';
import Loader from 'components/Common/Loader';
import AccoutnsEnter from 'components/Auth/AccoutnsEnter';

const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

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
              {t('name')}
              <s.Input type="text" name="name" autoComplete="on" />
            </s.Label>
            <s.Label>
              {t('email')}
              <s.Input type="email" name="email" autoComplete="on" />
            </s.Label>
            <s.Label>
              {t('password')}
              <s.Input type="password" name="password" autoComplete="on" />
            </s.Label>
            <s.Redirect>
              {t('goToLoginPage')} <s.Link to="/login">{t('logIn')}</s.Link>
            </s.Redirect>
            <Button type={'submit'} name={t('button.register')} />
          </s.Form>
          <s.Title>----------------- or -----------------</s.Title>
          <AccoutnsEnter setLoading={setLoading} />
        </>
      )}
    </s.Container>
  );
};

export default FormRegister;
