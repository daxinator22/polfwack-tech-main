import Header from './components/Header';
import Page from "./components/Page";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header pages={pages}></Header>
      <Page></Page>
    </div>
  );
}

const pages = [
  "Home",
  "About Us",
  "Portfolio",
  "Services",
  "Contact Us"
]

export default App;
