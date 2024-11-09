import React from 'react'

export default function proyectosPage() {
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
          className='flex flex-col w-2/3 md:w-1/4 lg:w-1/6 justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='mt-10 text-2xl'>Proyectos</p>
          
        </div>
      </div>
    </>
  )
}
