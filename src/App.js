import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header pages={pages}></Header>
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
