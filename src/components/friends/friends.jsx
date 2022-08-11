import PropTypes from 'prop-types';
import friends from '../../data/friends.json';
import { FriendListStyle, IsOnlineStatus, FriendCard } from './friends.style';
export const FriendList = () => {
  return (
    <FriendListStyle>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendCard key={id}>
            <IsOnlineStatus isOnline={isOnline}></IsOnlineStatus>
            <img src={avatar} alt="User avatar" width="48px" />
            <p>{name}</p>
          </FriendCard>
        );
      })}
    </FriendListStyle>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
