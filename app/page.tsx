export default function Home() {

  return (
    <>
      <main>
        <div
          className="bg-cover h-4/5 bg-center md:bg-top"
          style={{
            backgroundImage: `url(/background.jpg)`,
            height: "800px",
            opacity: ".7"
          }}
        >
          <p
            className='text-white'
          >
            Bienvenidos
          </p>
        </div>
      </main>
    </>
  );
}
