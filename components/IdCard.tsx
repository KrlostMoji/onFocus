import Image from 'next/image'
import React from 'react'

type IdCardProps = {
  miembro:{
    nombre: string,
    apellido: string
    carrera: string
    egresado: string
    certificaciones: string
    imagen: string
  } 
}

export default function IdCard({miembro}:IdCardProps) {
  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-2 justify-items-center items-center rounded-bl-2xl rounded-tr-2xl w-full lg:w-1/3 mx-auto mb-20 first-of-type:mb-5 md:first-of-type:mb-20 p-3 bg-gradient-to-tr from-cyan-600 via-cyan-900 to-cyan-600 drop-shadow-xl text-white text-base md:text-md'>
      <Image src={`/${miembro.imagen}`} width={100} height={100} alt={`Imagen de ${miembro.nombre}`}/>
      <p>{miembro.nombre}{' '}{miembro.apellido}</p>
      <p>{miembro.egresado}</p>
      <p>{miembro.carrera}</p>
      <p className='col-start-1 col-end-3'>{miembro.certificaciones}</p>
    </div>
  )
}
