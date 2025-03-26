import React from 'react';
import clsx from 'clsx';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      <li className={s.flex}>
        {friends.map(({avatar, name, isOnline,id} )=> (
    <div key ={id} className={s.card} >

      <img className={s.card_img} src={avatar} alt="Avatar" />
      <p className={s.card_title}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.card_status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.card_status, s.red)}>Offline</p>)}

    </div>))}
    </li>
    </ul>
  );
};

export default FriendList;
