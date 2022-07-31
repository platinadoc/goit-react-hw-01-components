import s from './UserProfile.module.css';
import PropTypes from 'prop-types';

const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.userProfile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{`@` + tag}</p>
        <p className={s.location}>{location} </p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers} </span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  localStorage: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};