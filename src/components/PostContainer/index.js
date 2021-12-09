import React, { useState, createRef, useEffect } from 'react';
import './style.css';
import Avatar from '../Avatar';
import Emoji from '../Emojis';
import { BsEmojiSmile } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  dispatchTagModal,
  dispatchCaption,
} from '../../redux/actions/postAction';

const PostContainer = () => {
  const [caption, setCaption] = useState('');

  const modal = useSelector((state) => state.post.modal);
  // const caption = useSelector((state) => state.post.caption);

  const dispatch = useDispatch();

  const showToggle = (e) => {
    dispatch(dispatchTagModal(!modal));
  };

  // Emoji
  const inputRef = createRef();
  const [showEmojis, setShowEmojis] = useState();
  const [cursorPosition, setCursorPosition] = useState();

  const pickEmoji = (e, { emoji }) => {
    const ref = inputRef.current;
    ref.focus();
    const start = caption.substring(0, ref.selectionStart);
    const end = caption.substring(ref.selectionStart);
    const text = start + emoji + end;

    setCaption(text);

    setCursorPosition(start.length + emoji.length);
  };

  const handleShowEmojis = () => {
    inputRef.current.focus();
    setShowEmojis(!showEmojis);
  };

  const handleChange = (e) => {
    setCaption(e.target.value);
    dispatch(dispatchCaption(caption));
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <div className='post_inner_container'>
      <div className='right__section' onClick={showToggle}>
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
          onChange={handleChange}
          ref={inputRef}
          value={caption}
        />
        <div className='bottom_text'>
          <BsEmojiSmile onClick={handleShowEmojis} />
          <p>{caption.length}/2,220</p>
        </div>
        {showEmojis && <Emoji pickEmoji={pickEmoji} />}
      </div>
    </div>
  );
};

export default PostContainer;
