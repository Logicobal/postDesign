import React from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';

const Emojis = ({ pickEmoji }) => {
  return (
    <div>
      <EmojiPicker onEmojiClick={pickEmoji} />
    </div>
  );
};

Emojis.propTypes = {
  pickEmoji: PropTypes.func,
};

export default Emojis;
