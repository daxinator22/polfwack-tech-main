import React from 'react';
import render from 'react-dom';

class PageContainer extends React.Component{
  constructor(props){
    super(props);
    this.pageWidth = Math.floor(100 / this.props.pages.length);
    this.pages = this.props.pages;
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

    function changeBackgroundToAccent(component){
      component.target.className = 'accent';
    }

    function changeBackgroundToPrimary(component){
      component.target.className = '';
    }

    const pages = this.pages.map((pageName) =>{
      return (
        <a
          style={pageStyle}
          onMouseEnter={changeBackgroundToAccent}
          onMouseOut={changeBackgroundToPrimary}
          onClick={() => {
            this.props.setCurrentPage(pageName);
            console.log(`Page was changed to ${pageName}`);            
          }}
          key={pageName}
        >
          {pageName}
        </a>
      );
    });

    return (
      <div style={pageContainerStyle}>{pages}</div>
    );
  }
}

export default PageContainer;
