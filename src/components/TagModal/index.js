import React from 'react';
import './style.css';

const TagModal = () => {
  return (
    <div className='tag__modal'>
      <div className='tag__header'>
        <h4>Tag:</h4>
        <input type='text' className='tag__input' />
      </div>
      <div className='tag__body'></div>
    </div>
  );
};

export default TagModal;
