import React from 'react';
import s from './Profile.module.css';

const Profile = ({item}) => {
    
  return (
    <div className={s.box}>
      <div className={s.user}>
        <img className={s.user_img} src={item.avatar} alt="User avatar" width={220} />
        <p className={s.user_title}>{item.username}</p>
        <p className={s.user_subtitle}>@{item.tag}</p>
        <p className={s.user_subtitle}>{item.location}</p>
      </div>

      <ul className={s.user_data}>
        <li className={s.user_data_item}>
          <span className={s.user_data_txt}>Followers</span>
          <span className={s.user_title}>{item.stats.followers}</span>
        </li>
        <li className={s.user_data_item}>
          <span className={s.user_data_txt}>Views</span>
          <span className={s.user_title}>{item.stats.views}</span>
        </li>
        <li className={s.user_data_item}>
          <span className={s.user_data_txt}>Likes</span>
          <span className={s.user_title}>{item.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
