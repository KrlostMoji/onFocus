'use client'
import Card from '@src/components/Card'
import React from 'react'
import data from './infoCards.json'
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards, EffectCoverflow, Pagination} from 'swiper/modules';

export default function serviciosPage(){

  return (
    <>
      <div
        className="bg-cover h-2/3 bg-center md:bg-top"
        style={{
          backgroundImage: `url(/background.jpg)`,
          height: '800px'
        }}
      >
        <div
          className='flex flex-col justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='mt-10 text-2xl'>Servicios On Focus</p>
        </div>
        <div className="my-10 mx-auto w-full md:w-3/5 justify-center items-center text-gray-800 font-black">
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
            //effect={'cards'}
            //grabCursor={true}
            modules={[EffectCards, EffectCoverflow, Pagination]}
            className="mySwiper mt-10"
            watchSlidesProgress={true}
            loop={true}
          >
            {/* <div className='flex items-center justify-center' id='contenedor'> */}
              {data.servicios.map(servicio=>(
                <SwiperSlide key={servicio.svg} className='rounded-lg'>
                  {({ isActive }) => (
                    isActive ? (
                    <>
                      <div className='flex flex-col gap-2 items-center justify-center text-justify p-5 bg-gradient-to-tr to-cyan-800 from-teal-500 rounded-md h-full w-full'>
                        <Card servicio={servicio} />
                        <p className='text-xs md:text-base mt-5 text-white mb-5'>{servicio.descripcion}</p>
                      </div>
                    </>
                    ) : (
                      <div className='flex flex-col gap-2 items-center justify-center text-justify p-5 rounded-md h-full'>
                        <Card servicio={servicio}/>
                      </div>
                    )
                  )}
                </SwiperSlide>
              ))}
            {/* </div> */}
          </Swiper>
        </div>
      </div>
    </>
  )
}
