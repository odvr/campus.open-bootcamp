import logo from './logo.svg';
import './App.css';
import Greetindf from './componentes/Puro/greetindf';
import ListaTareasComponente from './componentes/Contenedores/lista_tareas';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {/*Componente de listado de tareas*/}
        <ListaTareasComponente></ListaTareasComponente>
      

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
