'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import data from './tecnologias.json'


export default function Home() {

  return (
    <>
      <div
        className="bg-cover h-2/3 bg-center md:bg-top"
        style={{
          backgroundImage: `url(/background.jpg)`
        }}
      >
        <div
          className='flex w-full md:w-2/4 justify-center items-center m-auto text-gray-500 font-bold'
        >
          <p className='mt-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Tecnologías de desarrollo</p>
        </div>
        <div className="my-10 w-2/3 md:w-1/3 lg:w-1/5 m-auto text-gray-800 font-black">
            <Swiper
              className='mySwiper text-justify'
              centeredSlides={true}
              slidesPerView={1}
              navigation={true}
              effect={'cube'}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={{clickable: true}}
              modules={[Navigation, Pagination, EffectCube, Autoplay]}
              loop={true}
            >
              {data.tecnologias.map(tecnologia=>(
                <SwiperSlide key={tecnologia.imagen}>
                  <div className='flex flex-col h-[300px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-evenly items-center p-1 text-sm md:text-base rounded-lg'>
                    <Image 
                      src={`/${tecnologia.imagen}`}
                      width={200}
                      height={200}
                      alt={`Imagen de ${tecnologia.nombre}`}
                    />
                    <p className='my-5'>{tecnologia.nombre}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className=' flex w-full justify-center items-center m-auto text-gray-800 font-bold'>
          <p className='my-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Nuestro trabajo</p>
          <div>
            
          </div>
        </div>
      </div>
  </>
  );
}
