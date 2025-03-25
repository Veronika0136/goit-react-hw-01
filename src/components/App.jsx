import React from 'react';
import Profile from '../components/Profile/Profile';
import userData from '../assets/userData.json';

const App = () => {
  return (
    <>
     <ul>
        {userData.map((item, idx) => (
          <Profile key={idx} item={item} />
        ))}
      </ul>
    </>
  );
};
export default App;
