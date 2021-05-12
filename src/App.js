import './App.css';
import Page from './Page';
import Header from './Header';

/*
Main color: #4d4d4d
Secondary color: #4bcadb
Accent Color: #a7a8a7
*/

const pages = ['Home', 'About', 'Contact'];

function App() {
  return (
    <div>
      <Header pages={pages}></Header>
    </div>
  );
}

export default App;
