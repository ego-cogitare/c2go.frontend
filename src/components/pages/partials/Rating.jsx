import React from 'react';

export default ({ type, progress }) => (
  <div class={`rating ${type}`}>
    <div class="progress" style={{ width: `${progress || 'auto'}`, letterSpacing: '-4.6px' }}></div>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
    <span>☆</span>
  </div>
);
