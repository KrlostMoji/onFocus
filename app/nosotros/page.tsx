import Image from 'next/image'
import React from 'react'
import data from './personal.json'
import IdCard from '@src/components/IdCard'

export default function nosotrosPage() {
  return (
    <>
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`,
          }}
        >
        <div
          className='flex w-3/4 justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='my-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Acerca de OnFocus</p>
        </div>
        <div className='w-3/4 mx-auto grid grid-cols-1 xl:grid-cols-2 place-items-start justify-center gap-5 text-justify mb-5'>
          <div className='grid gap-3 md:gap-1 lg:grid-rows-2 place-items-center justify-center'>
            <p className='text-sm md:text-base font-bold indent-14 text-white py-0'>
              Empresa consolidada a finales de 2024, nace como un proyecto pequeño pero constante, enfocado en ofrecer servicios de calidad, en tiempo y forma a las personas usuarias.
              On Focus, es una idea de emprender en el área de los servicios Web en un estado pequeño como lo es Colima, pero de gran desarrollo y un amplio nivel informático, desde las pequeñas tiendas de abarrotes,
              hasta los grandes empresarios o profesionistas, que están a la vanguardia y saben la importancia de darse a conocer en el medio digital. 
            </p>
            <p className='text-sm md:text-base font-bold indent-14 text-white py-0 mb-10'>
              On Focus, siempre a la vanguardia, agradece el brindarnos tu confianza en aquellos proyectos de gran importancia para tu crecimiento y desarrollo profesional y/o de índole personal.
            </p>
          </div>
          <Image src={'/developer.jpg'} alt='Developer' width={500} height={500} className='mx-auto row-start-1 xl:row-start-auto drop-shadow-2' />
        </div>
        <div className='flex flex-col w-full items-center m-auto text-gray-800 font-bold'>
          <p className='my-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Nuestro equipo</p>
          <div className='flex flex-col md:flex-row gap-2 w-full md:w-3/4 xl:w-2/3 px-3'>
            {data.personal.map(miembro =>(
              <IdCard 
                key={miembro.id}
                miembro={miembro}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
