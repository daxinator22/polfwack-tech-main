import './App.css';
import logoLocation from './res/logo-white.png';
import React from 'react';
import Logo from './Logo';
import PageContainer from './PageContainer';
import {render} from 'react-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.pages);
  }

  render(){
    return (
      <div style={headerStyle} className='primary'>
        <div style={logoStyle}>
          <Logo url={logoLocation} dim={height}></Logo>
        </div>
        <PageContainer pages={this.props.pages} style={pageContainerStyle}></PageContainer>
      </div>
    );
  }
}


/*-------Styles-------*/

const height = '100px';

const headerStyle = {
  display: 'flex',
}

const pageContainerStyle = {
  display: 'flex',
}

const logoStyle = {
  width: '40%',
  paddingTop: '5px',
  display: 'flex',
  justifyContent: 'center',
}

export default Header;
