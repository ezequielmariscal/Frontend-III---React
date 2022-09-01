// El componente App es el padre de:
import React from 'react'
import Cabecera from './components/Cabecera' // - Cabecera
import Listado from './components/Listado' // - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

Class App extends React.Component {

  state= {
    count: 0,
  }

  sum=()=> {
    this.setState(prevState => {
      return {
        count: prevState.count +1
      }

    })

  }

  rest=()=> {
    this.setState(prevState => {
      return {
        count: prevState.count -1
      }

    })

  }

  render(){
    return(
      <div>
        <Cabecera count={this.state.count} suma={this.sum} rest={this.rest}/>
        <Listado count={this.state.count} suma={this.sum} rest={this.rest}/>
      </div>
    )
  }

}
function App() {

  return (
    <div className="App">
      <Cabecera />
      <Listado />
    </div>
  );
}

export default App;
