import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileImg,
  UserInfo,
  TextStyle,
  ListInfo,
  ActivityBox,
  Activity,
} from './profile.style';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <ProfileImg src={`${avatar}`} alt="User avatar" />
        <TextStyle>{username}</TextStyle>
        <TextStyle>{tag}</TextStyle>
        <TextStyle>{location}</TextStyle>
      </UserInfo>

      <ListInfo>
        <ActivityBox>
          <Activity>Followers</Activity>
          <Activity>{stats.followers}</Activity>
        </ActivityBox>
        <ActivityBox>
          <Activity>Views</Activity>
          <Activity>{stats.views}</Activity>
        </ActivityBox>
        <ActivityBox>
          <Activity>Likes</Activity>
          <Activity>{stats.likes}</Activity>
        </ActivityBox>
      </ListInfo>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
