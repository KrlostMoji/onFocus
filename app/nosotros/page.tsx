import Header from '@src/components/Header'
import React from 'react'

export default function nosotrosPage() {
  return (
    <>
      <Header />
      <div
          className="bg-cover h-2/3 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`,
            height: "800px",
            opacity: ".7"
          }}
        >
          <p>Desde nosotros</p>
        </div>
    </>
  )
}
