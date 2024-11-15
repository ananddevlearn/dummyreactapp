import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Visit <code>fernbasket.com</code> and you are at https://fernbasket.com.
        </p>
        <a
          className="App-link"
          href="https://fernbasket.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fernbasket
        </a>
      </header>
    </div>
  );
}

export default App;
