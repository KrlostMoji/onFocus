'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCube, Pagination } from "swiper/modules";


export default function Home() {

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
            <div className="mb-10 mt-10">
              <Swiper
                className='mySwiper w-[250px] mt-10 flex justify-center items-center'
                centeredSlides={true}
                slidesPerView={1}
                effect={'cube'}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, EffectCube, Autoplay]}
                autoplay={{
                  delay:3000, 
                  stopOnLastSlide:false, 
                  disableOnInteraction:false}}
                loop={true}
              >
                <SwiperSlide
                  className='bg-center bg-cover'
                >
                <Image 
                  src='/html.png' width={250} height={250} alt='Logo html' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
                <SwiperSlide
                  className='bg-center bg-cover w-fit'
                >
                <Image 
                  src='/css.png' width={250} height={250} alt='Logo css' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
                <SwiperSlide
                  className='bg-center bg-cover w-fit'
                >
                <Image 
                  src='/javascript.png' width={250} height={250} alt='Logo javascript' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
                <SwiperSlide
                  className='bg-center bg-cover w-fit'
                >
                <Image 
                  src='/react.svg' width={250} height={250} alt='Logo react' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
                <SwiperSlide
                  className='bg-center bg-cover w-fit'
                >
                <Image 
                  src='/tailwindcss.webp' width={250} height={250} alt='Logo tailwindcss' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
                <SwiperSlide
                  className='bg-center bg-cover w-fit'
                >
                <Image 
                  src='/next-js.svg' width={250} height={250} alt='Logo nodejs' className='bg-gradient-to-tr to-cyan-600 from-teal-500 block'
                />
                </SwiperSlide>
              </Swiper>
              {/* <Carousel
                responsive={responsive}
                className='w-52 h-52 md:w-[660px] mt-10'
                showDots={true}
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
              </Carousel> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
