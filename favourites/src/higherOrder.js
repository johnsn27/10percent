import React, { Component } from 'react';
import '@bbc/igm-collapsable-toolbar/dist/CollapsableToolbar.css';
import AccessiblePaletteButton from './palette-button';
import './palette.scss';

class HigherOrder extends Component {

  render() {
    return (
      <div contentEditable="false" suppressContentEditableWarning className={`paletteClass`}>
        <div className="palette__line" />
        <span className="palette__toolbar-contents">
          <AccessiblePaletteButton blockType="text" />
          <AccessiblePaletteButton blockType="headline" />
          <AccessiblePaletteButton blockType="media" />
          <AccessiblePaletteButton blockType="image" />
        </span>
      </div>
    );
  }
}


export default HigherOrder;
