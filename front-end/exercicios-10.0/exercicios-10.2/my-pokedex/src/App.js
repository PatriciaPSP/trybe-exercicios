import data from './data.js';
import Pokedex from './Pokedex.jsx';
import Pokemon from './Pokemon.jsx';


function App() {
  return(
    <div className="App">
     <h1>Pokedex</h1>
     {/* <h1>{data[0].name}</h1> */}
     <Pokemon />
     <Pokedex />
    </div>
  );
}

export default App;
