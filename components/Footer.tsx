import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div
    className='flex justify-around h-20 mt-5'
  >
    <div
      className='text-xs'
    >
      Copyright 2024
    </div>
    <nav
      className='flex gap-5'
    >
      <Link
        href={'https://www.facebook.com/7mojimojito/'}
        className=''
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook hover:drop-shadow-1 hover:stroke-blue-900" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      </Link>
      <Link
        href={'https://www.instagram.com/_mojimojito/'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram hover:drop-shadow-1 hover:stroke-blue-900" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      </Link>
    </nav>
  </div>
  )
}
