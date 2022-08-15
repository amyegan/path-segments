import logo from "./logo.svg";
import "./App.css";

function App() {
  let url = process.env.REACT_APP_VERCEL_URL;
  console.log("git provider", process.env.REACT_APP_VERCEL_GIT_PROVIDER);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Env = {process.env.REACT_APP_VERCEL_ENV}</p>
        <p>URL = {url}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
