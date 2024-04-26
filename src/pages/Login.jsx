import Section from 'components/Base/Section';
import Container from 'components/Base/Container';
import FormLogin from 'components/Auth/Login/FormLogin';

const Login = () => {
  return (
    <Section>
      <Container>
        <FormLogin />
      </Container>
    </Section>
  );
};

export default Login;
