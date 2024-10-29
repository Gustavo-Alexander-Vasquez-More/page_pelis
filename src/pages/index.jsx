import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carrousel_cartelera from '../components/carrousel_cartelera';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export default function index() {
const [cartelera, setCartelera]=useState()
console.log(cartelera);
const key='f1fbb395a697c39e04116e6e3b837637'
const url_images='https://image.tmdb.org/t/p/original'
async function getApi() {
try {
  const {data}=await axios.get('https://api.themoviedb.org/3/discover/movie',{
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
 
  <div className='w-full h-auto flex flex-col'>
  {/* ESTO ES EL NAV */}
  <Navbar/>
{/* AQUI ABAJO ES TODO LA CARTELERA DE PELICULAS */}
 <div className='w-full flex flex-col bg-gradient-to-b from-[#0d0d0d] to-[#000000]'>
 <Carrousel_cartelera/>
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 '>
  {cartelera?.map(pelis=>(
     <div key={pelis.id} className=' rounded-lg overflow-hidden'>
     <a href={`/movies?id=${pelis.id}`}>
       <img className='w-full h-auto' src={`${url_images}/${pelis.poster_path}`} alt={pelis.title} />
     </a>
   </div>
  ))}
  </div>
 </div>
  <Footer/>
  </div>
  </>
  );
}
