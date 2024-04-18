import * as s from './Button.styled';

const Button = ({ func, name, type, disabled }) => {
  return (
    <s.Button type={type} onClick={func} disabled={disabled}>
      {name}
    </s.Button>
  );
};

export default Button;
