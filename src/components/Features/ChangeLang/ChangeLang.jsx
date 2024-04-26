import { useTranslation } from 'react-i18next';

import { flags } from 'data/images';

import * as s from './ChangeLang.styled';

const ChangeLang = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <s.Wrapper>
      {flags.map(flag => (
        <s.Button
          type="button"
          key={flag.language}
          onClick={() => changeLanguage(flag.language)}
          $selected={selectedLanguage === flag.language}
        >
          <s.Image src={flag.country} alt={flag.alt} />
        </s.Button>
      ))}
    </s.Wrapper>
  );
};

export default ChangeLang;
