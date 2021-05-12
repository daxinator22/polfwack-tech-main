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
      display: 'flex',
      width: this.pageWidth + "%",
      justifyContent: 'center',
      alignItems: 'center',
    }

    const pageContainerStyle = {
      display: 'flex',
      width: this.props.width,
    }

    const pages = this.pages.map((pageName) =>{
      return (
        <div style={pageStyle}>
          <p style={{textAlign: 'center'}}>{pageName}</p>
        </div>
      );
    });

    console.log(pages);

    return (
      <div style={pageContainerStyle}>{pages}</div>
    );
  }
}

export default PageContainer;
