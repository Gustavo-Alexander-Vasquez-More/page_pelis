import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carrousel_cartelera from '../components/carrousel_cartelera';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function index() {
const [cartelera, setCartelera]=useState([])
const responsive = {
  desktop: {
  breakpoint: { max: 3000, min: 1279 },
  items: 5,
},
laptop: {
  breakpoint: { max: 1279, min: 1024 },
  items: 4,
},
tablet: {
  breakpoint: { max: 1023, min: 464 },
  items: 2,
},
mobile: {
  breakpoint: { max: 463, min: 0 },
  items: 1,
}};
console.log(cartelera);
const key='f1fbb395a697c39e04116e6e3b837637'
const url_images='https://image.tmdb.org/t/p/original'

async function getApi() {
try {
  const {data}=await axios.get('https://api.themoviedb.org/3/discover/movie',{
    params: {
      api_key: key,
      language: 'es-MX',
      sort_by: 'revenue.desc', // Ordenar de mayor a menor según la recaudación
      primary_release_year: 2024, // Filtrar por año de lanzamiento
      page: 1, // Cambia la página si quieres más resultados
    }
  });

  setCartelera(data.results)
  return data.results
} catch (error) {}}
//funcion para buscar videos de peliculas

useEffect(() => {
getApi()
}, []);
  return (
  <>
 
  <div className='w-full h-auto flex flex-col'>
  {/* ESTO ES EL NAV */}
  <Navbar/>
{/* AQUI ABAJO ES TODO LA CARTELERA DE PELICULAS */}
 <div className='w-full flex flex-col bg-[#080F28]'>
 <Carrousel_cartelera/>
  <div className='w-full flex flex-col h-auto py-[2rem]'>
   <div className='flex flex-col gap-2'>
    <p className='text-white font-semibold text-[1.3rem] pl-[1rem]'>Las más taquilleras de este año</p>
   <CarouselMulti responsive={responsive}  infinite={true}>
  {cartelera?.map(pelis=>(
    <div className='flex px-[1rem] items-center'>
      <div className="w-full  ">
      <a href={`/movies?id=${pelis.id}`}>
       <img className='w-full h-full' src={`${url_images}/${pelis.poster_path}`} alt={pelis.title} />
     </a>
     
      </div>
    </div>
  ))}
</CarouselMulti>
   </div>
  {/* {cartelera?.map(pelis=>(
     <div key={pelis.id} className='flex flex-col items-center rounded-lg overflow-hidden'>
     <a href={`/movies?id=${pelis.id}`}>
       <img className='w-full h-auto' src={`${url_images}/${pelis.poster_path}`} alt={pelis.title} />
     </a>
     <p className='text-center text-white' >{pelis.title}</p>
   </div>
  ))}  */}
  </div>
 </div>
  <Footer/>
  </div>
  </>
  );
}
