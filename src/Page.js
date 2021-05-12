import React from 'react';
import {render} from 'react-dom';

class Page extends React.Component {
  render() {
    return <h1>This is a different class, {this.props.name}</h1>
  }
}

export default Page;
