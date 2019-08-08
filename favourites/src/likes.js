import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftSideBarButton from './LeftSideBarButtons/LeftSideBarButton.js';
import './likes.css';

class LeftSideBar extends Component {
  render() {
    return (
      <div class="flex-container row">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
      </div>
    );
  }
}

export default LeftSideBar;
