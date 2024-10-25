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
          className="space-x-2 md:space-x-5 pr-0 md:pr-10 mt-0 md:mt-10 text-gd font-bold"
        >
          <Link
            href={'/'}
            className="relative hover:text-black after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-red-900 after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full"  
          >
            Inicio
          </Link>
          <Link
            href={'nosotros'}
            className="relative hover:text-black after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-red-900 after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full"
          >
            Nosotros
          </Link>
          <Link
            href={'servicios'}
            className="relative hover:text-black after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-red-900 after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full"
          >
            Servicios
          </Link>
          <Link
            href={'proyectos'}
            className="relative hover:text-black after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-red-900 after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full"
          >
            Proyectos
          </Link>
        </nav>
      </div>
    </>
  )
}
