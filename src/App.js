import Frase from './components/frase.js' 
import SayMyName from './components/SayMyName.js'
import Pessoa from './components/Pessoa.js'
import List from './components/List.js'
import './App.css';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <List/>
      <h1>Testando css</h1>
      <SayMyName nome="Diogo"/>
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade="28" profissao="engenheiro" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
