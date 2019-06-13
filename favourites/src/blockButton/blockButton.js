import React from 'react';
import PropTypes from 'prop-types';
import './blockButton.scss';

function blockButton({ id, type, tabIndex, className, text }) {
  return (
    <button
      id={id}
      type={type}
      tab-index={tabIndex}
      className={className}
      onClick={() => console.log("clicked")}
    >
      <span>{text}</span>
    </button>
  );
}

blockButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default blockButton;
