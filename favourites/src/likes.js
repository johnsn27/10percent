import React from 'react';
import Btn from './blockButton/blockButton.js';

class Likes extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isFav: true,
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  updateLikes(name) {
    localStorage.setItem(name, name);
    this.setState((prevState, props) => {
      return {
        isFav: !prevState.isFav,
      };
    });
    console.log(this.state.isFav);
    if (!this.state.isFav) {
      localStorage.removeItem(name)
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
        <button onClick={() => {
          this.getLikes('button1')
        }}>Get Likes</button>
      </div>

    );
  }
}

export default Likes;
