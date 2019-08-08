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
    let firstBlockClicks
    let firstBlock
    blocks.forEach(function (block) {
      if (firstBlockClicks) {
        if (Number(localStorage.getItem(block)) > Number(firstBlockClicks)) {
          console.log(block, localStorage.getItem(block))
          firstBlock = block
        }
      }
      else {
        firstBlockClicks = localStorage.getItem(block)
      }
    });
    var index = blocks.indexOf(firstBlock);
    if (index > -1) {
      blocks.splice(index, 1);
    }
    return [blocks, firstBlock];
  }

  render() {
    const blocks = ['text', 'headline', 'another one'];
    const firstBlock = this.getOrder(blocks);
    console.log(firstBlock);
    const secondBlock = this.getOrder(blocks);
    const thirdBlock = this.getOrder(blocks);
    return (
      <div className="flex-container row">
        <div id="headline" className="flex-item" onClick={() => this.updateClicks('headline')}>Headline</div>
        <div id="text" className="flex-item" onClick={() => this.updateClicks('text')}>Text</div>
        <div id="anotherOne" className="flex-item" onClick={() => this.updateClicks('another one')}>Another One</div>
      </div>
    );
  }
}

export default LeftSideBar;
