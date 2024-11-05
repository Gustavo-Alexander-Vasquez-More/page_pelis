import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function pagina_principal() {
const [cartelera, setCartelera]=useState([])

console.log(cartelera);
const key='f1fbb395a697c39e04116e6e3b837637'
const url_images='https://image.tmdb.org/t/p/original'

async function getApi() {
    try {
      const {data}=await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
        params:{
          api_key:key,
          append_to_response:'images, videos',
          language: 'es-MX',
        }
      })
      
      setCartelera(data.results)
      return data.results
    } catch (error) {}}
//funcion para buscar videos de peliculas

useEffect(() => {
getApi()
}, []);
  return (
<>
<div className='bg-[#080F28] w-full h-screen flex relative'>
  <div className='absolute w-full h-screen bg-[#000000a0]'></div>
  <div className='flex flex-wrap justify-center items-center w-full h-full'>
    {cartelera?.map((dat) => (
      <div key={dat.id} className='w-1/5 h-[25%]'> {/* Cada columna ocupa 1/4 del ancho */}
        <img className='w-full h-full object-cover ' src={`${url_images}/${dat.backdrop_path}`} alt="Poster de la película" />
      </div>
    ))}
  </div>
  <div className='w-full  h-screen  flex flex-col px-[1rem] lg:px-[20rem] text-white absolute z-50  pt-[2rem] lg:pt-[10rem]  justify-between text-center items-center'>

<h1 className='text-white font-semibold lg:text-[4.5rem]  text-[3rem]'>Bienvenido a Filmanity</h1>

    <p className='text-gray-300 text-[1.2rem]'>
    Explorá trailers, información de películas y compartí tus opiniones con otros usuarios. Disfrutá de una amplia selección de películas y series, desde los clásicos hasta los estrenos más esperados. Únete a nuestra comunidad y compartí tus recomendaciones, críticas y experiencias cinematográficas. ¡El cine te espera!
    </p>
    <a href='/Home' className='px-[1rem] py-[0.5rem] bg-[#0D6EFD] hover:bg-[#0da5fd] rounded-[5px] text-[1.2rem] font-semibold'>Comenzá a explorar!</a>
    <div className='flex flex-col text-white  text-[0.9rem] gap-2 pb-[1rem]'>
      <div className='flex gap-1'>
        <p>Ya tenés una cuenta?</p>
        <a href='' className=' text-white underline'>
        Iniciar sesión
      </a>
      </div>
      <div className='flex gap-1'>
        <p>¿Querés una cuenta?</p>
        <a href='' className=' text-white underline'>
        Registrarme
      </a>
      </div>
      
</div> 
</div>
</div>
</>
  );
}
