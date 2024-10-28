import Image from "next/image";

export default function Home() {

  return (
    <>
      <main>
        <div
          className="relative bg-cover h-auto bg-center md:bg-top bg-blend-soft-light" //before:content-[''] before:opacity-45 before:h-full before:w-full  before:bg-cyan-500 before:left-0 before:absolute"
          style={{
            backgroundImage: `url(/background.jpg)`,
            height: 800
          }}
        >
          <div
            className='flex flex-col w-3/4 justify-center items-center m-auto text-gray-800 font-black z-10'
          >
            <p className='mt-10 text-2xl'>Tecnologías de desarrollo</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 mb-10 mt-5 items-center">
              <Image 
                src='/html.png' width={200} height={200} alt='Logo html'
              />
              <Image 
                src='/css.png' width={200} height={200} alt='Logo css'
              />
              <Image 
                src='/javascript.png' width={200} height={200} alt='Logo javascript'
              />
              <Image 
                src='/react.svg' width={200} height={200} alt='Logo react'
              />
              <Image 
                src='/tailwindcss.png' width={200} height={200} alt='Logo tailwindcss'
              />
              <Image 
                src='/next-js.svg' width={200} height={200} alt='Logo next-js'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
