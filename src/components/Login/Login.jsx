// import { useContext } from 'react';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { Context } from 'index';

import * as s from './Login.styled';
// import Button from 'components/Button';

const Login = () => {
  // const { auth } = useContext(Context);

  // const login = async () => {
  //   const user = await signInWithPopup(auth, new GoogleAuthProvider());

  //   // const provider = new auth.GoogleAuthProvider();
  //   // const user = await auth.signInWithPopup(provider);
  //   console.log(user);
  // };

  return (
    <s.Container>
      <p>Login page</p>
      {/* <Button func={login} name="login" /> */}
    </s.Container>
  );
};

export default Login;
