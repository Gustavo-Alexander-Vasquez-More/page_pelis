import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ModalVideo from '../components/modal_video';
export default function peli_especifica() {
    const key='f1fbb395a697c39e04116e6e3b837637'
    const url_images='https://image.tmdb.org/t/p/original'
    const location = useLocation();
    const [id, setId] = useState(); // Inicializa el estado id como null
    const [data, setData]=useState()
    console.log(data);
    const [id_peli, setId_peli]=useState()
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
              append_to_response: 'images',
              language: 'es-ES',
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
  return (
   <>
    {modal === true && (
    <ModalVideo id={id_peli} closeModal={closeModal}/>
  )}
   <Navbar/>
        {data && (
    <div className='bg-[black] w-full h-[85vh] flex'>
        <div className='w-[30%] px-[2rem] flex justify-center items-center'>
            <img className='w-auto' src={`${url_images}/${data.poster_path}`} alt={data.title} />
        </div>
        <div className='flex flex-col w-[70%] items-center justify-center py-[2rem] text-white h-[85vh] gap-4 px-[2rem]'>
            <p className='text-[2rem] font-bold underline'>{data.title}</p>
            <div className='flex gap-3'>
                
                {data.genres.map(gen=>(
                    <button className='bg-primary rounded-[5px] py-[0.3rem] px-[0.5rem] font-semibold'>{gen.name}</button>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold '>Popularidad ⭐⭐⭐⭐⭐ </p>
                <p>A {data.popularity} personas les gustó la película.</p>
            </div>
            <div className='w-full flex flex-col gap-4'>
            <div className='gap-1 flex items-start'>
                <p className='font-bold '>Sinopsis:</p>
                <p>{data.overview}</p>
            </div>
            <div className='gap-1 flex'>
                <p className='font-bold '>Producción:</p>
                {produccion.map(pro=>(
                    <p className=''>{pro},</p>
                ))}
            </div>
           <div className='w-full flex justify-center items-center'>
           <button onClick={()=>openModal(data.id)} className='bg-primary rounded-[5px] py-[0.3rem] px-[1rem] text-[1.2rem]'>
                Ver el tráiler
            </button>
           </div>
            </div>
        </div>
    </div>
        )}
   </>
  );
}
