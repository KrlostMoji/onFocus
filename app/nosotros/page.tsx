import React from 'react'

export default function nosotrosPage() {
  return (
    <>
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`,
            height: "800px"
          }}
        >
        <div
          className='flex flex-col w-3/4 justify-center items-center m-auto text-gray-800 font-black'
        >
          <p className='mt-10 text-2xl'>Acerca de OnFocus</p>
          <p className='mt-10 text-2xl'>
              Empresa consolidada a finales de 2024, nace como un proyecto pequeño pero constante, enfocado en ofrecer servicios de calidad, en tiempo y forma a las personas usuarias.
            On Focus, es una idea de emprender en el área de los servicios Web en un estado pequeño como lo es Colima, pero de gran desarrollo y un amplio nivel informático, desde las pequeñas tiendas de abarrotes,
            hasta los grandes empresarios o profesionistas, que están a la vanguardia y saben la importancia de darse a conocer en el medio digital. 
          </p>
        </div>
      </div>
    </>
  )
}
