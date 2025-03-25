import React from 'react';
import clsx from 'clsx';
import s from './FriendList.module.css';

const FriendList = ({ friend }) => {
  return (
    <div className={s.card}>
      <img className={s.card_img} src={friend.avatar} alt="Avatar" />
      <p className={s.card_title}>{friend.name}</p>
      {friend.isOnline ? (
        <p className={clsx(s.card_status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.card_status, s.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendList;
