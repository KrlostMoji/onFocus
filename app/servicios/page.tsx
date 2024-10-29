import Card from '@src/components/Card'
import React from 'react'
import servicios from './infoCards.json'

export default function serviciosPage() {

  return (
    <>
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`
          }}
        >
          <div
            className="flex flex-col justify-center items-center  font-black"
          >
            <p className='mt-10 text-2xl text-gray-800'>Servicios onFocus(SIDE)</p>
            <ul
              className='list-none mt-10 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mb-10 '
            >
              {servicios.map(servicio=>(
                <li key={servicio.svg}><Card servicio={servicio}/></li>
              ))}
              
            </ul>
          </div>
        </div>
    </>
  )
}
