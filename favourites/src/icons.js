import React from 'react';
import GELIcon from '@bbc/igm-gel-icon';

export default {
  bold: (
    <GELIcon
      type="bold"
    />
  ),
  italic: (
    <GELIcon
      type="italics"
    />
  ),
  'unordered-list': (
    <GELIcon
      type="unorderedList"
    />
  ),
  'ordered-list': (
    <GELIcon
      type="orderedList"
    />
  ),
  link: (
    <GELIcon
      type="link"
      ariaLabel="link"
    />
  ),
  unlink: (
    <GELIcon
      customSvg={(
        <svg aria-label="unlink" role="img" viewBox="0 0 32 32">
          <path
            className="cls-1"
            d="M16.68,9.71,13.32,6.35a4.92,4.92,0,0,0-7,7l1.74,1.74L4.61,18.53,2.87,16.8A9.85,9.85,0,0,1,16.8,2.87l3.36,3.36Z"
          />
          <path
            className="cls-1"
            d="M15.33,22.22l3.36,3.36a4.92,4.92,0,1,0,7-7l-1.74-1.74,3.48-3.48,1.74,1.74a9.87,9.87,0,0,1,0,13.93,9.73,9.73,0,0,1-13.8.12l-3.48-3.48,3.48-3.48Z"
          />
        </svg>
      )}
    />
  ),
  language: (
    <GELIcon
      customSvg={(
        <svg aria-label="Link." role="img" height="13" width="13" viewBox="4 4 13 13">
          <path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 12a5.49 5.49 0 0 1-4.38-2.19l.36-2.82A15.86 15.86 0 0 1 5.1 9.51a5.48 5.48 0 0 1 7.15-4.23 2.32 2.32 0 0 0-.79 0l-.84.48.13.49-1.82.39-.13.62 1.18.11.79-.57 1.36.07-.23.78H8.14l-.32 1.36.48 1.05 2 .26v.61l.7.89-.4.81.81 2h1l1.43-4.28-.68-1.12 1.43-.12-.52-1.22 1.07-.23c.53.86.81 1.85.81 2.86A5.5 5.5 0 0 1 10.5 16z" />
        </svg>
      )}
    />
  ),
  removeLanguage: (
    <GELIcon
      customSvg={(
        <svg aria-label="Remove language." role="img" width="18.67" height="17.67" viewBox="0 0 18.67 17.67">
          <path d="M16.08 13.15l-.41-.48 1.3-1.45a8.55 8.55 0 0 0 .37-2.55 8.69 8.69 0 0 0-.05-.89l-.1-.11-1.27 1.42a7.34 7.34 0 0 1-6.13 6.81l-.12.13 1 1.07a8.18 8.18 0 0 0 1.42-.43l2.08-2.32.52.58a8.64 8.64 0 0 0 1.39-1.78zM9.99 14.17l1.35-1.5-2.01-2.24-.53 1.08 1.08 2.66h.11zM11.14 7.67L9.67 9.31l2.31 2.57.8-2.4-1.64-1.81z" />
          <path d="M8.93 16.67L8.32 16a7.35 7.35 0 0 1-5.51-2.92l.48-3.76a20.22 20.22 0 0 1-1.84-2A7.3 7.3 0 0 1 11 1.67a3.08 3.08 0 0 0-1.05 0l-1.12.64.17.65-2.42.52-.18.83 1.58.15 1-.76 1.81.09-.3 1h-5L5.1 6.67l.64 1.4 2.66.35v.79l.53-.54 1.48-1.64.74-.82.74.82 1 1.16-.72-1.18 1.9-.16-.69-1.63 1.43-.31a7.27 7.27 0 0 1 1 2.77l.59-.65.57-.63a8.67 8.67 0 1 0-8.3 10.94h.8z" />
          <path fillRule="evenodd" d="M17.19 7.67l-3.02 3.35-3.03-3.35-1.47 1.64 3.02 3.36-3.02 3.35 1.47 1.65 3.03-3.36 3.02 3.36 1.48-1.65-3.03-3.35 3.03-3.36-1.48-1.64z" />
        </svg>
      )}
    />
  ),
  external: (
    <GELIcon
      customSvg={(
        <svg aria-label="external" role="img" viewBox="0 0 32 32">
          <polygon
            className="cls-1"
            points="12 0 12 5 23.3 5 18.3 10 0 10 0 32 22 32 22 17.57 20 19.57 20 30 2 30 2 14.04 2 12 16.3 12 8.56 19.75 12.18 23.3 27 8.57 27 20 32 20 32 0 12 0"
          />
        </svg>
      )}
    />
  ),
  crop: (
    <svg aria-label="crop" role="img" height="13" width="13" viewBox="0 0 13 13">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="13 10.56 2.21 10.56 2.21 0 4.21 0 4.21 8.56 13 8.56 13 10.56" className="cls-1" />
          <polygon points="10.56 13 8.56 13 8.56 4.44 0 4.44 0 2.44 10.56 2.44 10.56 13" className="cls-1" />
        </g>
      </g>
    </svg>
  ),
  headline: (
    <GELIcon
      type="headline"
      ariaLabel="headline"
    />
  ),
  text: (
    <GELIcon
      type="text"
      ariaLabel="text"
    />
  ),
  glyph: (
    <GELIcon
      type="glyph"
      ariaLabel="glyph"
    />
  ),
  close: (
    <GELIcon
      customSvg={(
        <svg aria-label="close" role="img" viewBox="0 0 32 32">
          <path
            className="cls-1"
            d="M19.54,16,32,28.46,28.46,32,16,19.54,3.54,32,0,28.46,12.46,16,0,3.54,3.54,0,16,12.46,28.46,0,32,3.54Z"
          />
        </svg>
      )}
    />
  ),
  media: (
    <GELIcon
      customSvg={(
        <svg aria-label="media" role="img" viewBox="0 0 26 32">
          <polygon className="cls-1" points="0 32 26 16 0 0 0 32" />
        </svg>
      )}
    />
  ),
  image: (
    <GELIcon
      customSvg={(
        <svg aria-label="image" role="img" viewBox="0 0 32 26">
          <path
            className="cls-1"
            d="M9,2V0H4V2H0V26H32V2ZM6.5,10A2.5,2.5,0,1,1,9,7.52,2.5,2.5,0,0,1,6.5,10ZM20,23a9,9,0,1,1,9-9A9,9,0,0,1,20,23Z"
          />
          <circle className="cls-1" cx="20" cy="14.02" r="5.5" />
        </svg>
      )}
    />
  ),
  upChevron: (
    <GELIcon
      className="chevron"
      type="upChevron"
    />
  ),
  downChevron: (
    <GELIcon
      className="chevron"
      type="downChevron"
    />
  ),
  yes: (
    <GELIcon
      className="valid"
      type="yes"
    />
  ),
  no: (
    <GELIcon
      className="invalid"
      type="no"
    />
  ),
  grab: (
    <GELIcon
      customSvg={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17">
          <title>grab</title>
          <path
            d="M0 0h13v2H0V0zm0 4h13v2H0V4zm0 4h13v2H0V8zm0 4h13v2H0v-2z"
            fillRule="evenodd"
          />
        </svg>
      }
    />
  ),
  delete: (
    <GELIcon
      customSvg={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M26 32H6L5 11h4l.1 15H11V11h4v15h2V11h4v15h2V11h4l-1 21zM21 0h-9l-1 1v1h11V1l-1-1zM28 9H4V5l2-1h20l2 1v4z" />
        </svg>
      }
    />
  ),
};
