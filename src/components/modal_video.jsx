import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import ReactPlayer from 'react-player/youtube'; // Importamos react-player

export default function ModalVideo({ id, closeModal }) {
  const key = 'f1fbb395a697c39e04116e6e3b837637';
  const [urlVideo, setURLVideo] = useState(null); // Inicializamos como null
console.log(urlVideo);
  // Función para obtener el video
  async function getVideo(movieId) {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: key,
          append_to_response: 'videos',
          language: 'en-EN',
        },
      });

      // Verificar si hay videos disponibles
      const videoResults = data.videos && data.videos.results;
      if (videoResults && videoResults.length > 0) {
        setURLVideo(videoResults[0].key); // Guarda el "key" del primer video
      } else {
        console.log("No se encontraron videos.");
      }
    } catch (error) {
      console.error("Error al obtener el video:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getVideo(id); // Llama a getVideo pasando el id
    }
  }, [id]); // Asegúrate de que id esté en la lista de dependencias

  return (
    <div className='w-full h-screen absolute bg-[#000000a3] z-50 top-0 flex flex-col  '>
     <div className='flex justify-end px-[1rem] pt-[1rem]'>
     <button onClick={()=>{closeModal(); document.body.style.overflow = 'auto'}} className='justify-center items-center'>
      <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

      </button>
     </div>
      {urlVideo ? (
        <div className='h-full w-full flex justify-center items-center'>
            <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${urlVideo}`}
          controls={true}
          playing={true}
          
        />
        </div>
      ) : (
        <p>No hay video disponible.</p>
      )}
    </div>
  );
}
