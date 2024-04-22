import * as s from './UserAvatar.styled';

const UserAvatar = ({ user }) => {
  const firstLetter = user.displayName.slice(0, 1);
  const bigFirstLetter = firstLetter.toUpperCase();
  // const avatar = user.photoURL;

  // console.log(avatar);

  return (
    // <>
    //   {avatar === null ? (
    <s.Ellipse>{bigFirstLetter}</s.Ellipse>
    // ) : (
    //   <s.Ellipse>
    //     <s.Avatar src={avatar} alt="user_avatar" />
    //   </s.Ellipse>
    // )}
    // </>
  );
};

export default UserAvatar;
