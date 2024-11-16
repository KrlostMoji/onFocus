'use client'
import Card from '@src/components/Card'
import React from 'react'
import data from './infoCards.json'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination} from 'swiper/modules';
import Image from 'next/image';

export default function serviciosPage(){

  return (
    <>
      <div
        className="bg-cover h-2/3 bg-center md:bg-top"
        style={{
          backgroundImage: `url(/background.jpg)`,
        }}
      >
        <div
          className='flex flex-col justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='mt-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Servicios On Focus</p>
        </div>
        <div className="my-10 mx-auto w-full md:w-3/5 justify-center items-center text-gray-800">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 30,
              stretch: 2,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
            }}
            pagination={{
              clickable: true
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            watchSlidesProgress={true}
          >
              {data.servicios.map(servicio=>(
                <SwiperSlide key={servicio.svg} className='rounded-lg'>
                  {({ isActive }) => (
                    isActive ? (
                    <>
                      <div className='grid items-center justify-center text-center px-5 bg-gradient-to-tr to-cyan-800 from-teal-500 rounded-md h-[300px] w-full my-auto'>
                        <Card servicio={servicio} />
                        <p className='text-xs md:text-base text-black my-3'>{servicio.descripcion}</p>
                      </div>
                    </>
                    ) : (
                      <div className='grid items-center justify-center text-justify px-5 rounded-md h-[300px]'>
                        <Card servicio={servicio}/>
                      </div>
                    )
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div
          className='flex flex-col w-2/3 md:w-1/4 lg:w-1/6 justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='my-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Galería</p>
        </div>
        <div className='w-full md:w-3/4 mx-auto px-3 md:px-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1 md:gap-3 xl:gap-5 place-items-center pb-10 object-cover'>
          <Image src={'/galeria/administracion.jpg'} width={200} height={200} alt='galeria1' className='w-full object-fill h-full hover:scale-110 transition' />
          <Image src={'/galeria/administracion2.webp'} width={200} height={200} alt='galeria2' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/factura.jpg'} width={200} height={200} alt='galeria3' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/hosting.webp'} width={200} height={200} alt='galeria4' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/invita2.jpg'} width={200} height={200} alt='galeria6' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/invita.webp'} width={200} height={200} alt='galeria5' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/invita3.jpg'} width={200} height={200} alt='galeria7' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/portafolio.jpg'} width={200} height={200} alt='galeria8' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/portafolio2.jpg'} width={200} height={200} alt='galeria9' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/redes.jpg'} width={200} height={200} alt='galeria10' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/redes2.jpg'} width={200} height={200} alt='galeria11' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/redes3.jpg'} width={200} height={200} alt='galeria12' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/tienda.jpg'} width={200} height={200} alt='galeria13' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/tienda2.jpg'} width={200} height={200} alt='galeria14' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/tienda3.webp'} width={200} height={200} alt='galeria15' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/web.jpg'} width={200} height={200} alt='galeria16' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/web2.webp'} width={200} height={200} alt='galeria17' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/web3.jpg'} width={200} height={200} alt='galeria18' className='w-full object-fill h-full hover:scale-110 transition'/>
          <Image src={'/galeria/web4.webp'} width={200} height={200} alt='galeria19' className='w-full object-fill h-full hover:scale-110 transition'/>
        </div>
      </div>
    </>
  )
}
