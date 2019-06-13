import React from 'react';

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      isFav1: true,
      isFav2: true,
      isFav3: true,
      isFav4: true,
      isFav5: true,
    }
    this.updateLikes1 = this.updateLikes1.bind(this);
    this.updateLikes2 = this.updateLikes2.bind(this);
    this.updateLikes3 = this.updateLikes3.bind(this);
    this.updateLikes4 = this.updateLikes4.bind(this);
    this.updateLikes5 = this.updateLikes5.bind(this);
  }

  updateLikes1() {
    console.log("1");
      this.setState((prevState, props) => {
        return {
          isFav1: !prevState.isFav1,
        };
      });
  }
  updateLikes2() {
    console.log("2");
      this.setState((prevState, props) => {
        return {
          isFav2: !prevState.isFav2,
        };
      });
  }
  updateLikes3() {
    console.log("3");
      this.setState((prevState, props) => {
        return {
          isFav3: !prevState.isFav3,
        };
      });
  }
  updateLikes4() {
    console.log("4");
      this.setState((prevState, props) => {
        return {
          isFav4: !prevState.isFav4,
        };
      });
  }
  updateLikes5() {
    console.log("5");
      this.setState((prevState, props) => {
        return {
          isFav5: !prevState.isFav5,
        };
      });
  }

  render(){
    console.log(this.state.isFav1);
    console.log(this.state.isFav2);
    console.log(this.state.isFav3);
    console.log(this.state.isFav4);
    console.log(this.state.isFav5);
    return(
      <div>
        <button> Component1 <button onClick={this.updateLikes1}>Like</button></button>
        <button> Component2 <button onClick={this.updateLikes2}>Like</button></button>
        <button> Component3 <button onClick={this.updateLikes3}>Like</button></button>
        <button> Component4 <button onClick={this.updateLikes4}>Like</button></button>
        <button> Component5 <button onClick={this.updateLikes5}>Like</button></button>
      </div>
    );

  }


}

export default Likes;
