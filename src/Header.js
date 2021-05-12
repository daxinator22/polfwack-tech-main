import './App.css';
import logoLocation from './res/logo-white.png';
import React from 'react';
import Logo from './Logo';
import {render} from 'react-dom';

class Header extends React.Component{
  render(){
    return (
    <div style={headerStyle} class='primary'>
      <Logo url={logoLocation} style={logoStyle} dim={height}></Logo>
      <h1 style={headerTitleStyle}>This is a header</h1>
    </div>);
  }
}


/*-------Styles-------*/

const height = '100px';

const headerStyle = {
  display: 'flex',
  paddingLeft: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',
}

const headerTitleStyle = {
  marginTop: '0px',
}

const logoStyle = {
  width: '10%',
}

export default Header;
