import './App.css';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="App">
      <Dogs></Dogs>
      <button onClick={() => window.location.reload()} className="reload-button"> Actualizar </button>
    </div>
  );
}

export default App;
