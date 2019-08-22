import React, { Component } from 'react';
import './likes.css';
import Btn from '@bbc/igm-btn';
import Reveal from '@bbc/igm-reveal';
import GELIcon from '@bbc/igm-gel-icon';
import AccessiblePaletteButton from './palette-button';

class Likes extends Component {

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
    const blockTypes = ['text', 'headline', 'image', 'media', 'many', 'more', 'blocks'];
    const blockArray = [[blockTypes[0], localStorage.getItem(blockTypes[0])], [blockTypes[1], localStorage.getItem(blockTypes[1])], [blockTypes[2], localStorage.getItem(blockTypes[2])], [blockTypes[3], localStorage.getItem(blockTypes[3])], [blockTypes[4], localStorage.getItem(blockTypes[4])], [blockTypes[5], localStorage.getItem(blockTypes[5])], [blockTypes[6], localStorage.getItem(blockTypes[6])]]
    const sortedBlockArray = this.getOrder(blockArray);

    return (
      <div>
        <div className="flex-container row">
          <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[0][0])} blockType={sortedBlockArray[0][0]} />
          <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[1][0])} blockType={sortedBlockArray[1][0]} />
          <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[2][0])} blockType={sortedBlockArray[2][0]} />
          <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[3][0])} blockType={sortedBlockArray[3][0]} />
        </div>
        <div className="Reveal">
          <Reveal
            toggler={(onToggle, isOpen) => (
              <div onClick={onToggle}>
                <Btn
                  aria-label="hello"
                  onClick={onToggle}
                  type="plainLink"
                  className="toggler"
                >
                  {isOpen ? (
                    <GELIcon type="upChevron" />
                  ) : (
                      <GELIcon type="downChevron" />
                    )}
                </Btn>
              </div>
            )}
            className="info-section"
            isOpen={true}
          >
            <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[4][0])} blockType={sortedBlockArray[4][0]} />
            <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[5][0])} blockType={sortedBlockArray[5][0]} />
            <AccessiblePaletteButton onClick={() => this.updateClicks(sortedBlockArray[6][0])} blockType={sortedBlockArray[6][0]} />
          </Reveal>
        </div >
      </div>
    );
  }
}

export default Likes;