import React from 'react';
import './likes.css'

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
      if (currentItem === 'block1' || currentItem === 'block2') {
        x = x + localStorage.key(i) + " ";
      }
    }
    console.log(x);
  }

  render() {
    return (
      // <div className="wrapper">
      //   <div id="buttonsWrapper" className="buttonsWrapper">
      //     <div id="block1wrapper" className="block1wrapper">
      //       <div id="block1" className="divbutton">
      //         <button onClick={() => {
      //           this.updateLikes("block1")
      //         }}>block 1</button>
      //       </div>
      //     </div>
      //     <div id="block2wrapper" className="block2wrapper">
      //       <div id="block2" className="divbutton">
      //         <button onClick={() => {
      //           this.updateLikes("block2")
      //         }}>block 2</button>
      //       </div>
      //     </div>
      //   </div>
      //   <button onClick={() => {
      //     this.getLikes()
      //   }}>Get Likes</button>
      // </div>
      <div>
        <div id="block" onClick={() => {
        }}>block 1
        <div id="favourite" onClick={() => {
            this.updateLikes("headline")
            this.getLikes()
          }}>block 2
        </div>
        </div>
      </div>
    );
  }
}

export default Likes;
