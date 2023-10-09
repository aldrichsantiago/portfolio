import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="h-32 container fixed top-0 left-0 right-0">
        <ul className='h-full flex gap-12 items-center justify-center'>
          <li className='bg-white hover:scale-110 transition-transform'>
            <a href="#about" className=" hover:shadow-xl bg-white rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              About
            </a>
          </li>
          <li className='bg-white hover:scale-110 transition-transform'>
            <a href="#projects" className=" hover:shadow-xl bg-white rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              Projects
            </a>
          </li>
          <li className='bg-white hover:scale-110 transition-transform'>
            <a href="#contact" className=" hover:shadow-xl bg-white rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div id='about' className="pt-32 h-auto mt-40 container text-center">
        <h1 className='font-bold font-sans tracking-wide text-7xl lg:text-7xl subpixel-antialiased'>Aldrich Santiago</h1>
        <p className='font-bold font-sans text-3xl lg:text-3xl subpixel-antialiased text-slate-500'>Front-End Web Developer</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,0L26.7,37.3C53.3,75,107,149,160,186.7C213.3,224,267,224,320,186.7C373.3,149,427,75,480,58.7C533.3,43,587,85,640,85.3C693.3,85,747,43,800,26.7C853.3,11,907,21,960,32C1013.3,43,1067,53,1120,90.7C1173.3,128,1227,192,1280,208C1333.3,224,1387,192,1413,176L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      <div id='projects' className="pt-32 h-screen  bg-waves">

      </div>
      <div id='contact' className="pt-32 h-screen container bg-slate-400">

      </div>

    </>
  )
}

export default App
