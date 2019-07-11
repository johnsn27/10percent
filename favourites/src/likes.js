import React from 'react';
import Btn from './blockButton/blockButton.js';

class Likes extends React.Component {

  constructor(props) {

    super(props);
    this.updateLikes = this.updateLikes.bind(this);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  updateLikes(name) {
    console.log('updateLikes')
    if(localStorage.getItem(name)) {
      console.log('if');
      localStorage.removeItem(name);
    }
    else {
      console.log('else');
      localStorage.setItem(name, name);
    }
  }

  getLikes(name) {
    const item1 = localStorage.getItem(name);
    console.log(item1);
  }

  render() {
    return (
      <div className="outerDiv">
        <div className="top">
        </div>
        <div id="button1" className="divbutton">
          <button onClick={() => {
            this.updateLikes("button1")
          }}>Click Me!</button>
        </div>
        <div id="button2" className="divbutton">
          <button onClick={() => {
            this.updateLikes("button2")
          }}>Click Me!</button>
        </div>
        <button onClick={() => {
          this.getLikes('button1')
        }}>Get Likes</button>
      </div>

    );
  }
}

export default Likes;
