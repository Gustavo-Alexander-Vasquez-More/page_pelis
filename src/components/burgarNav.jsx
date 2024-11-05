import React from 'react';

export default function burgarNav({ close}) {
  return (
    <div class="offcanvas  offcanvas-start show bg-[#080F28] py-[1rem] px-[1rem] flex flex-col" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
    <div className=' flex justify-end items-center text-white'>
    <button onClick={close}>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
    </button>
    </div>
    <div className='flex flex-col items-start gap-3 mt-[2rem] text-[1.2rem]  text-white'>
    <div class="relative">
    <input 
      type="text" 
      placeholder="Buscar películas..." 
      class="bg-gray-800 w-full text-white rounded-full pl-4 pr-10 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CB5E0] transition duration-300"
    />
    <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#1CB5E0] transition duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM16.5 16.5l5 5" />
      </svg>
    </button>
  </div>
        <a href="/Home">Inicio</a>
        <a href="">Peliculas</a>
        <a href="">Iniciar sesión</a>
        <a href="">Cerrar sesión</a>
        <a href=""></a>
    </div>
  </div>
  
  );
}
