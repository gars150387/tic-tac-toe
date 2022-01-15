import logo from './logo.svg';
import './App.css';
import { Board } from './component/Board';


// const gameStyles ={
//   backgroundColor: 'salmon',
//   margin: 10,
//   padding: 20
// }

const App = () =>{
  return (
    <div className="App">
      Game
      <Board/>
    </div>
  );
}

export default App;
