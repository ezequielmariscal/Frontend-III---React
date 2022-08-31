import React from "react";
//extendemos una clase a su padre
class Fruta extends React.Component  {
 
  render() {
    return (
      <li style={{ backgroundColor: "lime", border: "solid 4px" }}>
        <span>{this.props.fruta}</span> - Cantidad: <span>{this.props.cantidad}</span>
      </li>// hago referencia a los props que despues se los debo pasar , todo esto es css adentro de js no es lo mejor.
    );//el padre le debe pasar los props.
  }// lo que vemos adentro es un componente funcional, es una fx que esta dentro de una class, es mejor usar funcionales..
}//fruta es es que tiene todo este pequeño codigo

export default Fruta;// lo exporto sino despues su padre no lo puede usar
