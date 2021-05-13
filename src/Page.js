import React, {useState} from 'react';
import {render} from 'react-dom';

class Page extends React.Component {
  render() {    
    return <h1 onClick={() => {
      console.log('This was clicked');
    }}>This is a different class, {this.props.name}</h1>
  }
}

export default Page;
