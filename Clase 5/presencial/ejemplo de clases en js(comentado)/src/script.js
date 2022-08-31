class Coches { //creo una clase con mayuscula .

    constructor(marca,modelo,puertas) { //funcion con parametros (es el contructor)

        this.marca=marca; // this significa para hacer referencia al objeto que estamos creando en el momento,
        this.modelo=modelo;//  de esa manera guardamos los datos en ese this 
        this.puertas=puertas;

    }

    mostrarAuto() { //creamos funcion para mostrar que es lo que tiene el auto

        document.body.innerHTML+=` 
        <h1>${this.marca}</h1>´
        <h2>${this.modelo}</h2>
        <h2>${this.puertas} puertas</h2>
        `
        //me paro en el dom (porq el dom es un objecto) en el el body mediante innerHTML puedo escribir adentro del html ,utilizo backtips´´´´
        // tambien ser puede utilizar createdByElement,
        //$ utilizamos para que funcione en el html lo de js
        //todavia falta invocar la funcion, 
        // pongo mas e igual para que me tome todo el codigo si quiero agregar mas coches
    }

}


let coche1 = new Coches("Chevrolet","Onix","4"); // creo una var que contenga un objecto osea usamos new, y de paso le paso parametros
let coche2 =new Coches("Hyundai","Atos","4")
console.log(coche1);
console.log(coche2);

coche1.mostrarAuto();// ejecuto el metodo mostrar auto ... esto se puede reutilizar infinitamente
coche2.mostrarAuto();
coche1.mostrarAuto();