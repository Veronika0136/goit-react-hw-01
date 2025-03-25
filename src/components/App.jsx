import React from 'react';
import Profile from '../components/Profile/Profile';
import userData from '../assets/userData.json';
import FriendList from '../components/FriendList/FriendList';
import friends from '../assets/friends.json';
import s from '../components/App.module.css';

const App = () => {
  return (
    <>
      <ul>
        {userData.map((item, idx) => (
          <Profile key={idx} item={item} />
        ))}
      </ul>
      <ul>
        <li className={s.flex}>
          {friends.map(friend => (
            <FriendList key={friend.id} friend={friend} />
          ))}
        </li>
      </ul>
    </>
  );
};
export default App;
