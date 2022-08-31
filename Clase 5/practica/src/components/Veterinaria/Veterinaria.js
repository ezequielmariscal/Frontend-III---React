import React from 'react';
import Perro from '../Perro/Perro';
import style from './Veterinaria.module.css';

const Veterinaria = () => {
  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      <div className={style.dogsContainer}>
        <Perro
          nombre="Nina"
          edad="5"
          sexo="Hembra"
          raza="Golden"
          tamanio="Grande"
          image="https://i.pinimg.com/originals/43/b7/35/43b735a391df74e0e839818279ae1465.png"
        />
        <Perro
          nombre="Cubone"
          edad="2"
          sexo="Macho"
          raza="Pokemon"
          tamanio="Chico"
          image="https://i.pinimg.com/originals/03/f2/2e/03f22e37615dbacfc73ca052149b3b71.jpg"
        />
        <Perro
          nombre="Kistsune"
          edad="5"
          sexo="Macho"
          raza="Schnauzer"
          tamanio="Mediano"
          image="https://i.pinimg.com/originals/cb/66/4c/cb664cc8474752297434ff1a03771110.jpg"
        />
        <Perro
          nombre="Kiubi"
          edad="2"
          sexo="Macho"
          raza="Zorro de nueve colas"
          tamanio="Grande"
          image="https://i.pinimg.com/originals/22/41/f1/2241f1af7459545a71fd621755535578.jpg"
        />
      </div>
    </div>
  );
};

export default Veterinaria;