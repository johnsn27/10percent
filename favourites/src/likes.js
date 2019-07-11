import React from 'react';
import Btn from './blockButton/blockButton.js';

class Likes extends React.Component {

  constructor(props) {

    super(props);
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes(name) {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
    }
    else {
      localStorage.setItem(name, name);
    }
  }

  getLikes() {
    var x = "", i, currentItem;
    for (i = 0; i < localStorage.length; i++) {
      currentItem = localStorage.key(i);
      if (currentItem === 'button1' || currentItem === 'button2') {
        x = x + localStorage.key(i) + " ";
      }
    }
    console.log(x);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="outerDiv">
          <div className="top">
          </div>
          <div id="button1" className="divbutton">
            <button onClick={() => {
              this.updateLikes("button1")
            }}>Click Me!</button>
          </div>
          <button onClick={() => {
            this.getLikes()
          }}>Get Likes</button>
        </div>
        <div className="outerDiv2">
          <div className="top">
          </div>
          <div id="button2" className="divbutton">
            <button onClick={() => {
              this.updateLikes("button2")
            }}>Click Me!</button>
          </div>
          <button onClick={() => {
            this.getLikes()
          }}>Get Likes</button>
        </div>
      </div>
    );
  }
}

export default Likes;
