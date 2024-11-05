import React from 'react';

export default function footer() {
  return (
    <div className='w-full  flex flex-col  px-[4rem] gap-4 py-[2rem] bg-[#080F28]'>
       <div className=' w-[100%] flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between'>
    <div class="bg-white bg-opacity-10 rounded-lg p-2 flex justify-center items-center">
  <a href="/Home">
  <h1 class="text-4xl font-bold bg-gradient-to-tr from-[#1CB5E0] to-[#81ecec] bg-clip-text text-transparent">
    Filmanity
  </h1>
  </a>
</div>
<div className='flex gap-3 text-white '>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
</div>
    </div>

    <div className='w-full text-center flex justify-center items-center text-[#e6e6e6bd] text-[0.7rem]'>
        <p>©2024-copyright Filmanity, lo mejor del cine en un solo lugar-Desarrollado por Gustavo Vásquez</p>
    </div>
    </div>
  );
}
