import React, { Component } from 'react';
import './likes.css';
// import blockButton from './blockButton/blockButton';

// TODO: create show more button

class LeftSideBar extends Component {

  updateClicks(blockType) {
    if (typeof (Storage) !== "undefined") {
      if (localStorage.getItem(blockType)) {
        const currentValue = Number(localStorage.getItem(blockType));
        const newValue = currentValue + 1;
        localStorage.setItem(blockType, newValue);
      } else {
        localStorage.setItem(blockType, 1);
      }
      console.log("You have clicked the " + blockType + " button " + localStorage.getItem(blockType) + " times.");
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }

  // TODO: make this function be called

  getOrder(blockArray) {
    blockArray.sort(compareSecondColumn);
    function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
        return 0;
      }
      else {
        return (b[1] < a[1]) ? -1 : 1;
      }
    }
    return blockArray
  }

  render() {
    const blockTypes = ['text', 'headline', 'anotherOne'];
    const blockArray = [[blockTypes[0], localStorage.getItem(blockTypes[0])], [blockTypes[1], localStorage.getItem(blockTypes[1])], [blockTypes[2], localStorage.getItem(blockTypes[2])]]
    const sortedBlockArray = this.getOrder(blockArray);

    return (
      <div className="flex-container row">
        <div id={sortedBlockArray[0][0]} className="flex-item" onClick={() => this.updateClicks(blockArray[0][0])}>{sortedBlockArray[0][0]}</div>
        <div id={sortedBlockArray[1][0]} className="flex-item" onClick={() => this.updateClicks(blockArray[1][0])}>{sortedBlockArray[1][0]}</div>
        <div id={sortedBlockArray[2][0]} className="flex-item" onClick={() => this.updateClicks(blockArray[2][0])}>{sortedBlockArray[2][0]}</div>
      </div>
    );
  }
}

export default LeftSideBar;
