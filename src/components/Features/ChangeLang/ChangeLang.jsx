import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { LOCALS } from 'i18n/constants';

import * as s from './ChangeLang.styled';

const ChangeLang = () => {
  const { t, i18n } = useTranslation();

  const options = [
    { value: LOCALS.EN, label: LOCALS.EN },
    { value: LOCALS.UK, label: LOCALS.UK },
    { value: LOCALS.IT, label: LOCALS.IT },
  ];

  const changeLanguage = language => {
    i18n.changeLanguage(language.value);
  };

  return (
    <>
      <s.Wrapper>
        <Select
          options={options}
          value={{ label: t(i18n.language) }}
          onChange={changeLanguage}
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              height: 'auto',
              padding: '7px',
              borderRadius: '12px',
              border: 'none',
              width: 'auto',
            }),
            valueContainer: baseStyles => ({
              ...baseStyles,
              paddingRifht: '5px',
              margin: '0',
            }),
            indicatorsContainer: baseStyles => ({
              ...baseStyles,
              padding: '0',
              margin: '0',
            }),
            input: baseStyles => ({
              ...baseStyles,
              padding: '0',
              margin: '0',
            }),
          }}
        />
      </s.Wrapper>
    </>
  );
};

export default ChangeLang;
