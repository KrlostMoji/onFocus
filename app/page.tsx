'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";


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
                className='mySwiper md:w-[380px] w-[300px] text-justify'
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
                pagination={true}
                modules={[Navigation, Pagination, EffectCube, Autoplay]}
                autoplay={{
                  delay:3000, 
                  stopOnLastSlide:false, 
                  disableOnInteraction:false}}
                loop={true}
              >
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/html.png' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>HTML HiperText Market Language, uno de las herramientas más básicas para construir páginas Web, ahora en su versión 5, que admite nuevas funcionalidades como de XML, multimedia, nuevas etiquetas, elementos y nuevas APIs. Ideal para el contenido estático</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/css.png' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>CSS Cascade StyleSheet, es un lenguaje en constante evolución, a pesar de que CSS 5 se lanzó en 1999, se espera que cada 5 años se genere un nuevo nivel de CSS con nuevas características. CSS es una excelente opción para dar estilo, diseño y colores a tus páginas Web y aplicaciones.</p> 
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/javascript.png' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>JavaScript, y su versión ECMAScript 2023, de junio de 2023, que tiene como objetivo mejorar la funcionalidad y el rendimiento, es un lenguaje que permite crear contenido dinámico, controles multimedia, imágenes animadas entre muchas otras cosas.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/react.svg' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>React, una librería muy amplia de JavaScript utilizada para el desarrollo web y aplicaciones móviles. Contiene una colección de fragmentos de código reutilizables para crear componentes.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/tailwindcss.webp' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>TailwindCSS, es un framework de CSS, para el diseño de páginas Web. Crea una lista de clases CSS que se pueden aplicar a cada elemento individualmente.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/next-js.svg' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>Next-JS, es un framework de JavaScript que permite crear aplicaciones Web y sitios Web estáticos, ofrece herramientas y configuración para React.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col h-[440px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-5 text-sm md:text-base rounded-lg'>
                    <Image 
                      src='/node-js.svg' width={200} height={200} alt='Logo html'
                    />
                    <p className='indent-12'>Node-JS, es un entorno de ejecución de JavaScript, que se utiliza para crear aplicaciones del lado del servidor, adecuado para grandes demandas de datos, como streaming de video y audio en línea.</p>
                  </div>
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
