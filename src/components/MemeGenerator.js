import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg"
    };
  }

  render() {
    return (
      <div>
        This is the meme generator component
      </div>
    );
  }
}

export default MemeGenerator;