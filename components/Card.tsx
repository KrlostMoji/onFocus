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
      className="flex flex-col gap-7 justify-center items-center group bg-gradient-to-bl to-gray-700 from-white h-32 w-32 mx-auto text-center hover:scale-110 transition ease-in-out rounded-full transform shadow-2xl shadow-black p-2"
    >
      <i className={`${servicio.svg}`}></i>
    </div>
  )
}
