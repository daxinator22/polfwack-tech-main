import React from 'react';
import render from 'react-dom';

class PageContainer extends React.Component{
  constructor(props){
    super(props);
    this.pageWidth = Math.floor(100 / this.props.pages.length);
    this.pages = this.props.pages;
    console.log(this.pages);
  }

  render() {
    const pageStyle = {
      width: this.pageWidth + "%"
    }

    const pages = this.pages.map((pageName) =>{
      return (
        <div>
          <p>{pageName}</p>
        </div>
      );
    });

    console.log(pages);

    return (
      <div>{pages}</div>
    );
  }
}

export default PageContainer;
