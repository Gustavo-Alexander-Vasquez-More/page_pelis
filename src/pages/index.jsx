import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal_video from '../components/modal_video';
import logo from '../images/logo.png'
import Navbar from '../components/navbar';
export default function index() {
const [cartelera, setCartelera]=useState()
const [modal, setModal]=useState(false)


console.log(cartelera);
const key='f1fbb395a697c39e04116e6e3b837637'
const url_images='https://image.tmdb.org/t/p/original'
async function getApi() {
try {
  const {data}=await axios.get('https://api.themoviedb.org/3/discover/movie',{
    params:{
      api_key:key,
      append_to_response:'images, videos',
      language: 'es-ES',
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
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 bg-[black]'>
  {cartelera?.map(pelis=>(
     <div key={pelis.id} className=' rounded-lg overflow-hidden'>
     <a href={`/movies?id=${pelis.id}`}>
       <img className='w-full h-auto' src={`${url_images}/${pelis.poster_path}`} alt={pelis.title} />
     </a>
   </div>
  ))}
  </div>
  </div>
  </>
  );
}
