import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div
    className='flex flex-col md:flex-row md:justify-around h-20 mt-5 gap-5 md:gap-0'
    >
      <div
        className='text-xs text-center'
      >
        Copyright 2024.- On Focus (Servicios Informáticos y Desarrollo Web)
      </div>
      <nav
        className='flex gap-5 justify-center'
      >
        <Link
          href={'https://www.facebook.com/7mojimojito/'}
          id='Facebook Carlos Mojica'
        >
          <i className="fa-brands fa-square-facebook fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://www.instagram.com/_mojimojito/'}
          id='Instagram Carlos Mojica'
        >
          <i className="fa-brands fa-instagram fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://www.threads.net/@_mojimojito'}
          id='Trhread Carlos Mojica'
        >
          <i className="fa-brands fa-threads fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://wa.me/+523125951190'}
          id='Whatsapp Carlos Mojica'
        >
          <i className="fa-brands fa-whatsapp fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://www.facebook.com/victormojica22/'}
          id='Facebook Victor Mojica'
        >
          <i className="fa-brands fa-square-facebook fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://www.instagram.com/victormojica22/'}
          id='Instagram Victor Mojica'
        >
          <i className="fa-brands fa-instagram fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
        <Link
          href={'https://wa.me/+523121044302'}
          id='Whatsapp Victor Mojica'
        >
          <i className="fa-brands fa-whatsapp fa-xl hover:drop-shadow-1" style={{color: '#000'}}></i>
        </Link>
      </nav>
    </div>
  )
}
