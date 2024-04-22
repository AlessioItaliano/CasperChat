import * as s from './Button.styled';

const Button = ({ func, name, type, disabled, size, btnType }) => {
  return (
    <s.Button
      type={type}
      onClick={func}
      disabled={disabled}
      $size={size}
      $btnType={btnType}
    >
      {name}
    </s.Button>
  );
};

export default Button;
