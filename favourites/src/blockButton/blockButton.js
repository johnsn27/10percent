import React from 'react';
import PropTypes from 'prop-types';
import './blockButton.scss';

// TODO: Make block button component

function blockButton({ id, className, onClick, text }) {
  return (
    <div id="first">
      {/* <div id={id} className="flex-item" onClick={() => this.updateClicks(blockArray[0][0])}>{text}</div> */}
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
