// El componente App es el padre de:
import React,{useState} from 'react'
import Cabecera from './components/Cabecera' // - Cabecera
import Listado from './components/Listado' // - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App()  {

  const [contador,setContador] = useState(0);

  function agregarCompra() {
    setContador(contador +1);

  }

return (
    <div className="App">
      <Cabecera totalCompra={contador}/>
      <Listado AgregandoCompra={agregarCompra}/>
    </div>
  );
}


export default App;
