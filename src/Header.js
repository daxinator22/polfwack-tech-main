import './App.css';
import logoLocation from './res/logo-white.png';
import React from 'react';
import Logo from './Logo';
import PageContainer from './PageContainer';
import {render} from 'react-dom';

class Header extends React.Component{
    render(){
    return (
    <div style={headerStyle} class='primary'>
      <div style={logoStyle}>
        <Logo url={logoLocation} dim={height}></Logo>
      </div>
      <PageContainer pages={this.props.pages}></PageContainer>
    </div>);
  }
}


/*-------Styles-------*/

const height = '100px';

const headerStyle = {
  display: 'flex',
}

const pagesStyle = {
  marginTop: '0px',
  height: height,
}

const logoStyle = {
  width: '40%',
  paddingTop: '5px',
  display: 'flex',
  justifyContent: 'center',
}

export default Header;
