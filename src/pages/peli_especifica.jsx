import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ModalVideo from '../components/modal_video';
import ReactPlayer from 'react-player/youtube';
import Footer from '../components/footer';
export default function peli_especifica() {
    const key='f1fbb395a697c39e04116e6e3b837637'
    const url_images='https://image.tmdb.org/t/p/original'
    const location = useLocation();
    const [id, setId] = useState(); // Inicializa el estado id como null
    console.log(id);
    const [data, setData]=useState()
    console.log(data);
    const [id_peli, setId_peli]=useState()
    console.log(id_peli);
    const [modal, setModal]=useState(false)
    const produccion=data?.production_companies.map(pro=>pro.name)
    console.log(produccion);
    console.log(data);
    const getIdFromQuery = () => {
        const queryParams = new URLSearchParams(location.search);
        return queryParams.get('id'); // Devuelve el valor del parámetro "id"
    };
    const openModal=(id)=>{
        setModal(true)
        setId_peli(id)
        scrollTo(0,0)
        }
        const closeModal=()=>{
         
          
          setModal(false)
          setId_peli()
          }
    // Usa useEffect para obtener el ID al montar el componente
    useEffect(() => {
        const movieId = getIdFromQuery(); // Obtén el ID de la URL
        if (movieId) {
            setId(movieId); // Establece el ID en el estado
        }
    }, [location.search]); // Dependencia para que se ejecute cuando cambie la búsqueda
    
    async function getVideo() {
        try {
          const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
              api_key: key,
              append_to_response: 'videos',
              language: 'es-MX',
            },
          });
          setData(data);
        } catch (error) {
          console.error("Error al obtener el video:", error);
        }
      }
      useEffect(() => {
        if (id) {
          getVideo(id); // Llama a getVideo pasando el id
        }
      }, [id]); 
      const datitos = (data?.videos?.results || []).map(dat => dat); // Si results es falsy, usa un array vacío
      const filter_trailer=Array.isArray(datitos) ? datitos.filter(dat=>dat.type === 'Trailer') : []
     
  return (
   <>
   <>
  <Navbar /> {/* Colocamos el Navbar fuera del contenedor de fondo */}
  {modal === true && <ModalVideo id={id_peli} closeModal={closeModal} />}
  
  {data && (
    <div className='w-full flex flex-col h-auto'>
      <div
      className="relative w-full h-auto lg:h-[65vh] lg:px-[15rem] py-[2rem] lg:py-0  flex lg:flex-row flex-col"
      style={{
        backgroundImage: `url(${url_images}/${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
      }}
    >
      {/* Overlay para opacar solo el fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='w-full lg:h-[65vh] h-auto flex lg:flex-row flex-col'>
      <div className="lg:w-[30%] w-full lg:py-[4rem] lg:pl-[2rem] lg:h-[65vh] flex justify-center py-[1rem] lg:items-start lg:justify-start z-50">
        <img className=" lg:w-[85%] w-[50%] " src={`${url_images}/${data.poster_path}`} alt={data.title} />
      </div>
      <div className="flex flex-col w-full lg:w-[70%]  lg:pl-[5rem] lg:items-start lg:justify-start lg:py-[4rem] h-auto px-[1rem] text-white lg:h-[65vh] z-50 gap-4 ">
        <p className="text-[2rem] font-bold ">{data.title}</p>
      <div className="flex flex-col gap-1">
          <p className="font-bold">⭐⭐⭐⭐⭐ </p>
          <p>A {data.popularity} personas les gustó la película.</p>
        </div>
        <p>{data.overview}</p>
        <div className="flex gap-2">
  <p>Género:</p>
  {data.genres.map((gen, index) => (
    <p key={gen.id}>
      {gen.name}
      {index < data.genres.length - 1 && ","} {/* Agrega una coma solo si no es el último género */}
    </p>
  ))}
</div>
</div>
      </div>
    </div>
    <div className='w-full h-auto lg:py-0 py-[2rem] lg:h-screen bg-gradient-to-b from-[#0d0d0d] to-[#000000]'>
    {filter_trailer.length > 0 && (
<>
<div className='h-full  w-full hidden lg:flex justify-center items-center'>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${filter_trailer[0].key}`} // Accede al primer elemento directamente
      controls={true}
      
      width={'80%'}
      height={'90%'}
    />
  </div>
  <div className='h-full  w-full flex lg:hidden justify-center '>
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${filter_trailer[0].key}`} // Accede al primer elemento directamente
    controls={true}
    
  />
</div>
</>
)}
{filter_trailer.length === 0 && (
  <p className='text-center text-white'>No hay videos para mostrar</p>
)}
    </div>
    </div>
  )}
  <Footer/>
</>
</>
  );
}
