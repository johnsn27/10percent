import React from 'react';
import PropTypes from 'prop-types';
import './blockButton.scss';

function updateLikes(name) {
  if (localStorage.getItem(name)) {
    localStorage.removeItem(name);
  }
  else {
    localStorage.setItem(name, name);
  }
}

function getLikes() {
  var x = "", i, currentItem;
  for (i = 0; i < localStorage.length; i++) {
    currentItem = localStorage.key(i);
    if (currentItem === 'block1' || currentItem === 'block2') {
      x = x + localStorage.key(i) + " ";
    }
  }
  console.log(x);
}

// function blockButton({ id, type, tabIndex, className, text }) {
//   return (
//     <button
//       id={id}
//       type={type}
//       tab-index={tabIndex}
//       className={className}
//       onClick={() => updateLikes()}
//     >
//       <span>{text}</span>
//     </button>
//   );
// }

function blockButton({ id, type, tabIndex, className, text }) {
  return (
    <div id="first">
      <div id="abc">"Hover over me!</div>
      <div id="def">Stuff shown on hover</div>
    </div>
  );
}

blockButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default blockButton;
