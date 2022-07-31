import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(obj => {
        return (
          <FriendListItem
            avatar={obj.avatar}
            name={obj.name}
            isOnline={obj.isOnline}
            key={obj.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
