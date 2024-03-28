import * as s from './Button.styled';

const Button = ({ func, name, type }) => {
  return (
    <s.Button type={type} onClick={func}>
      {name}
    </s.Button>
  );
};

export default Button;
