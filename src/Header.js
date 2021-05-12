import './App.css';
import logo from './res/logo-white.png';
import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component{
  render(){
    return (
    <div style={headerStyle} class='primary'>
      <img src={logo} alt='logo'/>
      <h1 style={headerTitleStyle}>This is a header</h1>
    </div>);
  }
}


/*-----Styles------*/

const headerStyle = {
  height: '100px',
}

const headerTitleStyle = {
  marginTop: '0px',
}

export default Header;
