import logo from './logo.svg';
import './App.css';
import Greetindf from './componentes/greetindf';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {/*Esta es la manera donde se importan los componentes*/}
        <Greetindf name ={"Omar Vega"}></Greetindf>
      

        </p>
        
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
