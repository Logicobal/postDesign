import React from 'react';
import './style.css';
import Avatar from '../Avatar';
import { BsEmojiSmile } from 'react-icons/bs';

const PostContainer = ({ children }) => {
  return (
    <div className='post_inner_container'>
      <div className='right__section'>
        <img
          src='https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'
          alt='insta img'
        />
      </div>
      <div className='left__section'>
        <Avatar
          username='jhone_doe'
          avatar='https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'
        />
        <textarea
          aria-label='Write a caption...'
          placeholder='Write a caption...'
          className='textInput'
          autoComplete='off'
          autoCorrect='off'
        />
        <div className='bottom_text'>
          <BsEmojiSmile />
          <p>0/2,220</p>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
