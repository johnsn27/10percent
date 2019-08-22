import React, { Component } from 'react';
import '@bbc/igm-collapsable-toolbar/dist/CollapsableToolbar.css';
import AccessiblePaletteButton from './palette-button';
import './palette.scss';
import Likes from './likes';

class HigherOrder extends Component {

  render() {
    return (
      <div contentEditable="false" suppressContentEditableWarning className={`paletteClass`}>
        <span className="palette__toolbar-contents">
          <Likes><AccessiblePaletteButton blockType="text" /></Likes>
          <AccessiblePaletteButton blockType="headline" />
          <AccessiblePaletteButton blockType="media" />
          <AccessiblePaletteButton blockType="image" />
        </span>
      </div>
    );
  }
}

export default HigherOrder;
