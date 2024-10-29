import React from 'react'

type CardProps = {
  servicio:{
    svg: string,
    nombreServicio: string
  }
}

export default function Card({servicio}: CardProps) {
  return (
    <div 
      className="flex flex-col gap-7 justify-center items-center group bg-teal-400 w-52 md:w-60 h-44 md:h-56 text-center transition hover:scale-110 ease-in-out hover:bg-teal-600 rounded-md transform shadow-2xl shadow-black"
    >
      <i className={`${servicio.svg}`}></i>
      <p className='group-hover:text-teal-100 group-hover:animate-bounce'>{servicio.nombreServicio}</p>
    </div>
  )
}
