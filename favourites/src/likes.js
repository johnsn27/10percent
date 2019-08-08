import React, { Component } from 'react';
import './likes.css';

class LeftSideBar extends Component {

  updateLikes(blockType) {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.getItem(blockType)) {
        const currentValue = Number(localStorage.getItem(blockType));
        const newValue = currentValue + 1;
        localStorage.setItem(blockType, newValue);
      } else {
        localStorage.setItem(blockType, 1);
      }
      console.log("You have clicked the button " + localStorage.getItem(blockType) + " times.");
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }

  render() {
    return (
      <div className="flex-container row">
        <div className="flex-item" onClick={() => this.updateLikes('headline')}>Headline</div>
        <div className="flex-item" onClick={() => this.updateLikes('text')}>Text</div>
        <div className="flex-item" onClick={() => this.updateLikes('another one')}>Hover over me!</div>
      </div>
    );
  }
}

export default LeftSideBar;
