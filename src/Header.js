import './App.css';
import logoLocation from './res/logo-white.png';
import React from 'react';
import Logo from './Logo';
import PageContainer from './PageContainer';
import {render} from 'react-dom';

class Header extends React.Component{
  render(){
    return (
      <div style={headerStyle} className='primary'>
        <div style={logoStyle}>
          <Logo url={logoLocation} dim={height}></Logo>
        </div>
        <PageContainer
          pages={this.props.pages}
          width={pageContainerWidth}
          setCurrentPage={this.props.setCurrentPage}
        >
          </PageContainer>
      </div>
    );
  }
}


/*-------Styles-------*/

const height = '100px';
const pageContainerWidth = "60%";
const logoContainerWidth = "40%";

const headerStyle = {
  display: 'flex',
}

const logoStyle = {
  width: logoContainerWidth,
  paddingTop: '5px',
  display: 'flex',
  justifyContent: 'center',
}

export default Header;
