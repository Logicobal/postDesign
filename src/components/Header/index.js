import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import './style.css';
const Header = () => {
  return (
    <div className='post__header'>
      <MdKeyboardBackspace className='back__icon' />
      <h3>Create new post</h3>
      <button type='button' className='share__btn'>
        Share
      </button>
    </div>
  );
};

export default Header;
