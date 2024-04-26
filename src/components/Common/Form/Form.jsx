import Button from 'components/Common/Button';

import * as s from './Form.styled';

const Form = ({
  onSubmit,
  formValue,
  onFormChange,
  formPlaceholder,
  btnName,
  btnDisabled,
  formSize,
  children,
  paddingLeft,
}) => {
  return (
    <s.Form onSubmit={onSubmit} $formSize={formSize}>
      <s.Input
        value={formValue}
        onChange={onFormChange}
        placeholder={formPlaceholder}
        $paddingLeft={paddingLeft}
      />
      {children}
      <Button name={btnName} type="submit" disabled={btnDisabled} />
    </s.Form>
  );
};

export default Form;
