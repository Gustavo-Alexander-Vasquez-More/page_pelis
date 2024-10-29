import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
export default function ModalVideo({ id, closeModal }) {
  const key = 'f1fbb395a697c39e04116e6e3b837637';
  const [urlVideo, setURLVideo] = useState(null);
  console.log(urlVideo);
  const [isLoading, setIsLoading] = useState(null); // Estado de carga

  // Función para obtener el video
  async function getVideo(movieId) {
    try {
      // Inicia el loader
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        
        params: {
          api_key: key,
          append_to_response: 'videos',
          language: 'es-MX',
        },
      });

      const videoResults = data.videos.results;
      const trailerFilter = videoResults.filter((dat) => dat.type === 'Trailer');
      if (trailerFilter.length > 0) {
        setIsLoading(true); 
        setURLVideo(trailerFilter[0].key); // Asigna la URL del video si se encuentra
      }
    } catch (error) {
      console.error("Error al obtener el video:", error);
      setIsLoading(false); // Detenemos el loader en caso de error
    }
  }

  useEffect(() => {
    if (id) {
      getVideo(id);
    }
  }, [id]);

  return (
    <div className='w-full h-screen absolute bg-[#000000c4] z-50 top-0 flex flex-col'>
      <div className='flex justify-end px-[1rem] pt-[1rem]'>
        <button onClick={() => { closeModal(); document.body.style.overflow = 'auto'; setIsLoading(null) }} className='justify-center items-center'>
          <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      {isLoading === true && (
        <div className='flex flex-col justify-center items-center h-full gap-2'>
          <div className="animate-spin text-white text-5xl">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
            </svg>
          </div>
          <p className='text-white font-semibold'>Cargando el video, por favor espere...</p>
        </div>
      )}
      {urlVideo && (
        <div className='h-full w-full flex justify-center items-center'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${urlVideo}`}
            controls={true}
            playing={true}
            width={'80%'}
            height={'90%'}
            onReady={() => setIsLoading(false)} // Oculta el loader cuando el video esté listo
          />
        </div>
      ) }
    </div>
  );
}
