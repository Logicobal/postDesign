import React from 'react';
import './style.css';

import Header from '../Header';
import PostContainer from '../PostContainer';
import TagModal from '../TagModal';

import { useSelector } from 'react-redux';

const SharePost = () => {
  const modal = useSelector((state) => state.post.modal);

  return (
    <div className='post__wrapper'>
      <div className='post__container'>
        <Header />
        <PostContainer />
        {modal && <TagModal />}
      </div>
    </div>
  );
};

export default SharePost;
