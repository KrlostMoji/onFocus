import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <div
        className='h-20 flex justify-between m-5 text-gray-50'
      >
        <Image src='/logo.png' alt='Logotipo' width={100} height={100}/>
        <nav
          className='space-x-5 pr-10 mt-10 text-gd font-bold'
        >
          <Link
            href={'/'}
            className=' hover:text-black'
          >
            Inicio
          </Link>
          <Link
            href={'nosotros'}
            className=' hover:text-black'
          >
            Nosotros
          </Link>
          <Link
            href={'servicios'}
            className=' hover:text-black'
          >
            Servicios
          </Link>
          <Link
            href={'proyectos'}
            className=' hover:text-black'
          >
            Proyectos
          </Link>
        </nav>
      </div>
    </>
  )
}
