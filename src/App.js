import './App.css';
import {useState} from 'react';
import Page from './Page';
import Header from './Header';

/*
Main color: #4d4d4d
Secondary color: #4bcadb
Accent Color: #a7a8a7
*/

const pages = ['Home', 'About', 'Contact', 'Portfolio', 'Login'];

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div>
      <Header pages={pages} setCurrentPage={this.setCurrentPage}></Header>
      <Page></Page>
    </div>
  );
}

export default App;
