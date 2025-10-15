
import './App.css';
import OutraLista from './components/OutraLista';

const meuItens = ['react' , 'vue' , 'angular']

function App() {
  return (
    <div className="App">
      <h1>Renderizacao de listas</h1>
      <OutraLista itens={meuItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
