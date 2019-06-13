import React from 'react';
import { render } from 'react-dom';
import Likes from './likes';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Likes/>
  </div>
);

export default App;
