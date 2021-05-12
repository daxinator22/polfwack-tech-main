import React from 'react';
import {render} from 'react-dom';

class Logo extends React.Component{
  render(){
    return (
      <div>
        <img src={this.props.url} height={this.props.dim}/>
      </div>
    );
  }
}

export default Logo;
