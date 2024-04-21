import * as s from './Button.styled';

const Button = ({ func, name, type, disabled, size }) => {
  return (
    <s.Button type={type} onClick={func} disabled={disabled} $size={size}>
      {name}
    </s.Button>
  );
};

export default Button;
