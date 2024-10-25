import Card from '@src/components/Card'
import React from 'react'

export default function serviciosPage() {

  return (
    <>
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`,
            opacity: ".7"
          }}
        >
          <div
            className="flex flex-col justify-center items-center text-gray-1000 font-black"
          >
            <p className='mt-10 text-2xl'>Servicios onFocus(SIDE)</p>
            <ul
              className='list-none mt-5 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mb-10 '
            >
              <li><Card servicio={"Servicio de Diseño y Desarrollo Web"}/></li>
              <li><Card servicio={"Sistemas de Venta en Línea"}/></li>
              <li><Card servicio={"Sistemas de Administración"}/></li>
              <li><Card servicio={"Sistemas de Facturación"}/></li>
              <li><Card servicio={"Invitaciones Bodas, XVs, Bautizos, etc."}/></li>
              <li><Card servicio={"Portafolio profesional"}/></li>
              <li><Card servicio={"Manejo de redes sociales"}/></li>
              <li><Card servicio={"Hosting y Dominios"}/></li>
            </ul>
          </div>
        </div>
    </>
  )
}
