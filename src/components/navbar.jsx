import React from 'react';
import logo from '../images/logo.png'
export default function navbar() {
  return (
    <div className='flex justify-between bg-primary px-[2rem] py-[1rem] h-[15vh]'>
    <div className='w-[15%]'><img className='w-full h-full object-contain' src={logo} alt="" /></div>
    <div className='w-[85%] text-white font-semibold text-[1.2rem] items-center flex justify-around'>
      <a href="/">Inicio</a>
      <a href="">Películas</a>
      <a href="">Sobre nosotros</a>
    </div>
  </div>
  );
}
