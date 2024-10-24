import React from 'react';

export default function footer() {
  return (
    <div className='w-full  flex flex-col  px-[4rem] gap-2 py-[2rem] bg-gradient-to-tl from-[#1CB5E0] to-[#000046]'>
       <div className='lg:w-[15%] w-[100%]'>
    <div class="bg-white bg-opacity-10 rounded-lg p-2 flex justify-center items-center">
  <h1 class="text-4xl font-bold bg-gradient-to-tr from-[#1CB5E0] to-[#81ecec] bg-clip-text text-transparent">
    Filmanity
  </h1>
</div>
    </div>
    <div className='w-full text-center flex justify-center items-center text-white font-semibold underline'>
        <p>Todos los derechos reservados - Alex More</p>
    </div>
    </div>
  );
}
