import React from 'react'

export default function proyectosPage() {
  return (
    <>
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`
          }}
        >
        <div
          className='flex flex-col w-2/3 md:w-1/4 lg:w-1/6 justify-center items-center m-auto text-gray-800 font-bold'
        >
          <p className='my-10 text-2xl bg-gradient-to-tr from-black via-red-700 to-black bg-clip-text text-transparent'>Proyectos</p>
        </div>
      </div>
    </>
  )
}
