import React from 'react';
import PropTypes from 'prop-types';
import { connectAriaAnnouncementConsumer } from 'react-aria-announcer';
import Btn from '@bbc/igm-btn';
import icons from './icons';

export function PaletteButton({
  onClick, blockType,
}) {
  const GAOnEvents = 'click,auxclick,contextmenu';

  return (
    <Btn
      aria-label={`add ${blockType} block`}
      className={`palette__button add-${blockType}-block`}
      onClick={() => onClick(blockType)}
      ga-on={GAOnEvents}
      ga-event-category={`Add ${blockType} Block Button`}
    >
      {icons[blockType]}
      <span className="palette__button-label">{blockType}</span>
    </Btn>
  );
}

PaletteButton.propTypes = {
  blockType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const AccessiblePaletteButton = connectAriaAnnouncementConsumer(PaletteButton);

export default AccessiblePaletteButton;
