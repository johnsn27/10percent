import React from 'react';
import Btn from './blockButton/blockButton.js';

class Likes extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isFav1: true,
    }
    this.updateLikes1 = this.updateLikes1.bind(this);
  }

  updateLikes1() {
    console.log("1");
    this.setState((prevState, props) => {
      return {
        isFav1: !prevState.isFav1,
      };
    });
  }

  render() {
    console.log(this.state.isFav1);
    return (
      <div class="outerDiv">
        <div class="top">
        </div>
        <div class="divbutton">
          <Btn id="Component1" type="primary" tab-index="1" className="Button" text="Component1">
          </Btn>
        </div>
      </div>
    );

  }


}

export default Likes;
