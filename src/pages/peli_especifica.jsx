import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios';
import ModalVideo from '../components/modal_video';
import ReactPlayer from 'react-player/youtube';
import Footer from '../components/footer';
export default function peli_especifica() {
  const notyf = new Notyf({
    position: {
      x: 'center',
      y: 'top',
    },
    duration:3500
  });
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
    
      
      function comprobarLogueo() {
        if (!localStorage.getItem('usuario')) {
          notyf.error('Necesitas una cuenta para poder comentar');
        }
      }
      
  return (
   <>
   <>
  <Navbar /> {/* Colocamos el Navbar fuera del contenedor de fondo */}
  {modal === true && <ModalVideo id={id_peli} closeModal={closeModal} />}
  
  {data && (
    <div className='w-full flex flex-col h-auto bg-[#080F28]'>
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
    <div className='w-full  lg:py-0 py-[2rem]  '>
    {filter_trailer.length > 0 && (
<>
<div className='  w-full h-[90vh] hidden lg:flex justify-center items-center'>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${filter_trailer[0].key}`} // Accede al primer elemento directamente
      controls={true}
      
      width={'80%'}
      height={'90%'}
    />
  </div>
  <div className='h-full px-[2rem]  w-full flex lg:hidden justify-center '>
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${filter_trailer[0].key}`} // Accede al primer elemento directamente
    controls={true}
    
  />
</div>
</>
)}
<div className='w-full h-auto py-[2rem] lg:py-[4rem] flex flex-col gap-3 px-[1rem] lg:px-[4rem] text-white'>
  <div className='flex gap-2 items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
  <p>Comentarios del público</p>
</div>
<div className=' w-full flex flex-col items-start gap-2'>
  <textarea  className='w-full lg:w-[50%] px-[0.5rem] py-[0.5rem] text-black' name="" id="" placeholder='Deja un comentario sobre la película'></textarea>
<button onClick={comprobarLogueo} className='bg-[gray] px-[1rem] border-solid border-white border-[2px] py-[0.3rem]'>Enviar</button>
</div>
<div className='lg:w-[50%] w-full border-solid border-white border-[1px] gap-2 flex flex-col text-black py-[0.5rem] px-[0.5rem]'>
  <div className='bg-gradient-to-tr from-[#8b8b8b] to-[#1CB5E0] rounded-[10px] flex flex-col gap-1 py-[0.5rem] px-[0.5rem] w-full'>
  <div className='w-full gap-2 h-[1.5rem] flex rounded-full '>
      <img className='w-[1.5rem] h-[1.5rem] rounded-full' src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/326104439_1596340544164383_9078056232077191942_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHj7Ih0pImBoy8jelOnrPnTzlBqwZ6uqbHOUGrBnq6psX1idycdh9ZmYObqzYgzn9VtUJmsUuBJOlOET3wsTdKL&_nc_ohc=6sLf__q7fG0Q7kNvgFmDVV7&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=A1YiPv0mrjh3mOPBEyRYVGp&oh=00_AYDNN_oveSClcd6jg6keBZESTx2L8PamaSbwMC1nN6l2oA&oe=672B4D2C" alt="" />
      <p>Alex More</p>
  </div>
    <div className='w-full flex text-[0.8rem]'>
      <p>La peli es una porqueriá, mal, hecha, no la vean por favor.. aburridisima!</p>
    </div>
  </div>
  
  <div className='bg-gradient-to-tr from-[#8b8b8b] to-[#1CB5E0] rounded-[10px] flex flex-col gap-1 py-[0.5rem] px-[0.5rem] w-full'>
  <div className='w-full gap-2 h-[1.5rem] flex rounded-full '>
      <img className='w-[1.5rem] h-[1.5rem] rounded-full' src="data:image/jpeg;base64,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" alt="" />
      <p>Fernando perez</p>
  </div>
    <div className='w-full flex text-[0.8rem]'>
      <p>Podría ser mejor, sinceramente no la recomiendo</p>
    </div>
  </div>

  <div className='bg-gradient-to-tr from-[#8b8b8b] to-[#1CB5E0] rounded-[10px] flex flex-col gap-1 py-[0.5rem] px-[0.5rem] w-full'>
  <div className='w-full gap-2 h-[1.5rem] flex rounded-full '>
      <img className='w-[1.5rem] h-[1.5rem] rounded-full' src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
      <p>Micaela diaz</p>
  </div>
    <div className='w-full flex text-[0.8rem]'>
      <p>Es buena peli no hagan caso a los comentarios</p>
    </div>
  </div>

  <div className='bg-gradient-to-tr from-[#8b8b8b] to-[#1CB5E0] rounded-[10px] flex flex-col gap-1 py-[0.5rem] px-[0.5rem] w-full'>
  <div className='w-full gap-2 h-[1.5rem] flex rounded-full '>
      <img className='w-[1.5rem] h-[1.5rem] rounded-full' src="https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/foto-perfil-psicologo-180x180.jpg?resize=180%2C180" alt="" />
      <p>Juan guarnizo</p>
  </div>
    <div className='w-full flex text-[0.8rem]'>
      <p>Es una peli con poco presupuesto no le pidan mucho..</p>
    </div>
  </div>


</div>
</div>
</div>
    </div>
  )}
  <Footer/>
</>
</>
  );
}
