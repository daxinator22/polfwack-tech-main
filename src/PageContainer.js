import React from 'react';
import render from 'react-dom';

class PageContainer extends React.Component{
  constructor(props){
    super(props);
    this.pageWidth = Math.floor(100 / this.props.pages.length);
  }

  render() {
    return (
      <div>
        <h1>{this.pageWidth}</h1>
      </div>
    );
  }
}

export default PageContainer;
