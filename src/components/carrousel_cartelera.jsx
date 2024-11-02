import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ModalVideo from '/src/components/modal_video';
export default function carrousel_cartelera() {
    const [cartelera, setCartelera]=useState()
    const [id, setId] = useState();
    const [id_peli, setId_peli]=useState()
    
    console.log(id_peli);
    const [modal, setModal]=useState(false)
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
const openModal=(id)=>{
    setModal(true)
    setId_peli(id)
    scrollTo(0,0)
    document.body.style.overflow = 'hidden';
    }
    const closeModal=()=>{
      setModal(false)
      setId_peli()
      }
useEffect(() => {
getApi()
}, []);
    const movieBanners = [
        { id: 1, image: 'https://example.com/banner1.jpg' },
        { id: 2, image: 'https://example.com/banner2.jpg' },
        { id: 3, image: 'https://example.com/banner3.jpg' },
        // Agrega más banners según sea necesario
      ];
  return (
   <>
    {modal === true && (
        <ModalVideo id={id_peli} closeModal={closeModal}/>
      )}
    <div className='w-full h-[50vh] lg:h-[70vh] relative'>
    <Carousel 
      infiniteLoop 
      autoPlay 
      interval={3000} 
      showThumbs={false} 
      showIndicators={true}
       
      showStatus={false}
    >
      {cartelera?.map(pelis => (
        <div key={pelis.id} className='w-full h-full relative'>
          {/* Imagen de fondo en object-cover */}
          <img 
            src={`${url_images}${pelis.backdrop_path}`} 
            alt={`Banner de película ${pelis.id}`}
            className='absolute inset-0 w-full h-full object-cover rounded-lg filter blur-md' // Imagen de fondo
          />
          {/* Imagen principal en object-contain */}
          <img 
            src={`${url_images}${pelis.backdrop_path}`} 
            alt={`Banner de película ${pelis.id}`}
            className='relative w-full h-[50vh] lg:h-[70vh] object-contain rounded-lg z-10' // Imagen principal
          />
          {/* Overlay oscuro */}
          <div className='absolute inset-0 bg-black opacity-50 rounded-lg z-20'></div> {/* Fondo opaco */}
          <div className='absolute z-30 text-white flex items-start px-[1rem] lg:px-[7rem] gap-4 flex-col top-[45%] lg:top-[35%] lg:h-[35vh] '>
            <p className=' text-[1rem] lg:text-[3rem] font-semibold'>{pelis.title}</p>
            <p className='text-[1rem] lg:flex hidden font-semibold text-start'>{pelis.overview}</p>
            <a href={`/movies?id=${pelis.id}`} className='bg-gradient-to-tr from-[#000046] to-[#1CB5E0] px-[0.5rem] lg:px-[2rem] text-[0.8rem] lg:text-[1.1rem] py-[0.5rem] text-white font-semibold rounded-[10px]'>
              Ver detalles
            </a>
          </div> 
        </div>
      ))}
    </Carousel>
  </div>
   </>
  );
}
