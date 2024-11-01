'use client'
import Card from '@src/components/Card'
import React from 'react'
import data from './infoCards.json'
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards } from 'swiper/modules';

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
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-[300px] h-[300px]"
              >
                {data.servicios.map(servicio=>(
                  <SwiperSlide key={servicio.svg}>
                    <Card servicio={servicio}/>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
    </>
  )
}
