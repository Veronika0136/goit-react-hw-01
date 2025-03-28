import React from 'react';
import clsx from 'clsx';
import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img className={s.card_img} src={avatar} alt="Avatar" />
      <p className={s.card_title}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.card_status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.card_status, s.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
