import * as s from './HeroMessage.styled';

const HeroMessage = ({ name, msm, position }) => {
  const firstLetter = name.slice(0, 1);
  const bigFirstLetter = firstLetter.toUpperCase();

  return (
    <s.Container position={position}>
      <s.Ellipse>{bigFirstLetter}</s.Ellipse>
      <s.Message>
        <s.Name>{name}</s.Name>
        <s.Description>{msm}</s.Description>
      </s.Message>
    </s.Container>
  );
};

export default HeroMessage;
