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
      <div className="outerDiv">
        <div className="top">
        </div>
        <div className="divbutton">
          <Btn id="Component1" type="submit" tab-index="1" className="Button" text="Component1">
          </Btn>
        </div>
      </div>
    );

  }


}

export default Likes;
