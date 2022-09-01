// import logo from './logo.svg';
import './App.module.css';
import Hijo from './components/Hijo';

let array = ["HOLA", "HOLA", "HOLA", "MUNDO"];
let arrayKey = array.map(
  (element, index) => <Hijo key={index + 1} value={element}/>
);

function App() {
  return (
    <div>
      {arrayKey}
    </div>
  );
}

export default App;
