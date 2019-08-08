import React, { Component } from 'react';
import './likes.css';

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

  getOrder(blocks) {
    blocks.sort(function (a, b) {
      return b - a
    });
    console.log(blocks)
    return blocks;
  }

  getLikes(blockTypes, blockClicks) {
    // let blockType, blockClick, currentItem;
    // let blockOrder = []
    // for (blockType = 0; blockType < blockTypes.length; blockType++) {
    //   currentItem = blockTypes[blockType];
    //   if (localStorage.getItem(currentItem) == blockClicks[blockClick]) {
    //     blockOrder.push(currentItem)
    //     blockClick++;
    //   }
    // }
    // console.log(blockOrder);
    localStorage.find(key => localStorage[key] === 49);
  }

  render() {
    const blockTypes = ['text', 'headline', 'anotherOne'];
    const blockClicks = [localStorage.getItem(blockTypes[0]), localStorage.getItem(blockTypes[1]), localStorage.getItem(blockTypes[2]),];
    const blockOrder = this.getOrder(blockClicks);

    this.getLikes(blockTypes, blockClicks);

    return (
      <div className="flex-container row">
        <div id="headline" className="flex-item" onClick={() => this.updateClicks('headline')}>Headline</div>
        <div id="text" className="flex-item" onClick={() => this.updateClicks('text')}>Text</div>
        <div id="anotherOne" className="flex-item" onClick={() => this.updateClicks('anotherOne')}>Another One</div>
      </div>
    );
  }
}

export default LeftSideBar;
