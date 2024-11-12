'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";


export default function Home() {

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
          className='flex w-full md:w-2/4 justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='my-10 text-2xl'>Tecnologías de desarrollo</p>
        </div>
        <div className="my-10 w-2/3 md:w-2/5 justify-center items-center m-auto text-gray-800 font-black">
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
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/html.png' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>HTML HiperText Market Language, uno de las herramientas más básicas para construir páginas Web, ahora en su versión 5, que admite nuevas funcionalidades como de XML, multimedia, nuevas etiquetas, elementos y nuevas APIs. Ideal para el contenido estático</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/css.png' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>CSS Cascade StyleSheet, es un lenguaje en constante evolución, a pesar de que CSS 5 se lanzó en 1999, se espera que cada 5 años se genere un nuevo nivel de CSS con nuevas características. CSS es una excelente opción para dar estilo, diseño y colores a tus páginas Web y aplicaciones.</p> 
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/javascript.png' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>JavaScript, y su versión ECMAScript 2023, de junio de 2023, que tiene como objetivo mejorar la funcionalidad y el rendimiento, es un lenguaje que permite crear contenido dinámico, controles multimedia, imágenes animadas entre muchas otras cosas.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/react.svg' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>React, una librería muy amplia de JavaScript utilizada para el desarrollo web y aplicaciones móviles. Contiene una colección de fragmentos de código reutilizables para crear componentes.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/tailwindcss.webp' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>TailwindCSS, es un framework de CSS, para el diseño de páginas Web. Crea una lista de clases CSS que se pueden aplicar a cada elemento individualmente.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/next-js.svg' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>Next-JS, es un framework de JavaScript que permite crear aplicaciones Web y sitios Web estáticos, ofrece herramientas y configuración para React.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col h-[500px] gap-1 md:gap-5 bg-gradient-to-tr to-cyan-800 from-teal-500 justify-center items-center p-1 text-sm md:text-base rounded-lg'>
                  <Image 
                    src='/node-js.svg' width={200} height={200} alt='Logo html'
                  />
                  <p className='indent-12 my-5'>Node-JS, es un entorno de ejecución de JavaScript, que se utiliza para crear aplicaciones del lado del servidor, adecuado para grandes demandas de datos, como streaming de video y audio en línea.</p>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  </>
  );
}
