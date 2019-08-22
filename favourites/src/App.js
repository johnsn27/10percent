import React from 'react';
import Likes from './likes';
import HigherOrder from './higherOrder'

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
