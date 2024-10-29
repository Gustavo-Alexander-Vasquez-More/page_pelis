import React from 'react';
import logo from '../images/logo.png'
export default function navbar() {
  return (
    <div className='flex justify-between items-center  bg-gradient-to-tr from-[#000046] to-[#1CB5E0] px-[1rem] lg:px-[4rem] py-[1.5rem] '>
    <div className='lg:w-[15%] w-[60%]'>
    <div class="bg-white bg-opacity-10 rounded-lg p-2 flex justify-center items-center">
  <h1 class="text-4xl font-bold bg-gradient-to-tr from-[#1CB5E0] to-[#81ecec] bg-clip-text text-transparent">
    Filmanity
  </h1>
</div>
    </div>
    <div className='lg:hidden flex w-[40%] justify-end  items-center'>
      <button>
      <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
</svg>

      </button>
    </div>
    <div className='w-[85%]  text-white font-semibold text-[1.2rem] items-center hidden lg:flex justify-end gap-5'>
      <a href="/">Inicio</a>
      <a href="">Directorio</a>
      <a href="">Cartelera</a>
      <div class="relative">
    <input 
      type="text" 
      placeholder="Buscar películas..." 
      class="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CB5E0] transition duration-300"
    />
    <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#1CB5E0] transition duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM16.5 16.5l5 5" />
      </svg>
    </button>
  </div>
    </div>
  </div>
  );
}
