import React from 'react';

export default ({ type, progress }) => (
  <div class={`rating ${type}`}>
    <div class="progress" style={{ width: `${progress || 'auto'}` }}></div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);
