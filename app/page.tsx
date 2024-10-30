'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import Carousel from "react-multi-carousel";
import { EffectCards } from "swiper/modules";


export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <main>
        <div
          className="relative bg-cover h-auto bg-center md:bg-top bg-blend-soft-light" //before:content-[''] before:opacity-45 before:h-full before:w-full  before:bg-cyan-500 before:left-0 before:absolute"
          style={{
            backgroundImage: `url(/background.jpg)`,
            height: 800
          }}
        >
          <div
            className='flex flex-col w-3/4 justify-center items-center m-auto text-gray-800 font-black z-10'
          >
            <p className='mt-10 text-2xl'>Tecnologías de desarrollo</p>
            <div className="mb-10 mt-10 items-center">
              <Swiper
                className='w-[300px] md:w-[660px] mt-10'
                spaceBetween={5}
                slidesPerView={3}
              >
                <SwiperSlide
                  className="items-center"
                >
                <Image 
                  src='/html.png' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                  src='/css.png' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                  src='/javascript.png' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                  src='/react.svg' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                  src='/tailwindcss.png' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                  src='/next-js.svg' width={200} height={200} alt='Logo html'
                />
                </SwiperSlide>
              </Swiper>
              <Carousel
                responsive={responsive}
                className='w-52 h-52 md:w-[660px] mt-10'
              >
                <div
                  className="items-center"
                >
                <Image 
                  src='/html.png' width={200} height={200} alt='Logo html'
                />
                </div>
                <div>
                <Image 
                  src='/css.png' width={200} height={200} alt='Logo html'
                />
                </div>
                <div>
                <Image 
                  src='/javascript.png' width={200} height={200} alt='Logo html'
                />
                </div>
                <div>
                <Image 
                  src='/react.svg' width={200} height={200} alt='Logo html'
                />
                </div>
                <div>
                <Image 
                  src='/tailwindcss.png' width={200} height={200} alt='Logo html'
                />
                </div>
                <div>
                <Image 
                  src='/next-js.svg' width={200} height={200} alt='Logo html'
                />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
