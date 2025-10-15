import Evento from './components/Evento.js'
import Form from './components/Form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form/>
    </div>
  );
}

export default App;
