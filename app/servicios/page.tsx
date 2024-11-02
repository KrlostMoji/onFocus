'use client'
import Card from '@src/components/Card'
import React from 'react'
import data from './infoCards.json'
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';

export default function serviciosPage() {

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
            className="flex flex-col justify-center items-center  font-black"
          >
            <p className='mt-10 text-2xl text-gray-800'>Servicios onFocus(SIDE)</p>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 2,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                //effect={'cards'}
                //grabCursor={true}
                modules={[EffectCards, EffectCoverflow, Pagination]}
                className="mySwiper w-[280px] md:w-[420px] h-[350px] md:h-[400px] mt-10"
                watchSlidesProgress={true}
              >
                <div className='flex items-center justify-center' id='contenedor'>
                  {data.servicios.map(servicio=>(
                    <SwiperSlide key={servicio.svg} className='rounded-lg hover:rounded-lg bg-gradient-to-tr to-cyan-800 from-teal-500'>
                      {({ isActive }) => (
                        isActive ? (
                        <>
                          <div className='flex flex-col gap-2 items-center justify-center text-justify p-5'>
                            <Card servicio={servicio} />
                            <p className='text-xs md:text-base mt-5'>{servicio.descripcion}</p>
                          </div>
                        </>
                        ) : <Card servicio={servicio} /> 
                      )}
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
          </div>
        </div>
    </>
  )
}
