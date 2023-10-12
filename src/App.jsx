import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import projects from './projects.json'
import { FaXmark, FaRegPaperPlane, FaFolderPlus, FaGithub } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)
  const [incrementBy, setIncrementBy] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [item, setItem] = useState(null)
  

  return (
    <>
      <nav className="h-32 container fixed top-0 left-0 right-0">
        <ul className='h-full flex gap-6 items-center justify-end'>
          <li className='hover:scale-110 transition-transform'>
            <a href="#about" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-2 px-6 subpixel-antialiased font-semibold shadow-sm">
              About
            </a>
          </li>
          <li className='hover:scale-110 transition-transform'>
            <a href="#projects" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-2 px-6 subpixel-antialiased font-semibold shadow-sm">
              Projects
            </a>
          </li>
          <li className='hover:scale-110 transition-transform'>
            <a href="#contact" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-2 px-6 subpixel-antialiased font-semibold shadow-sm">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id='about' className="pt-32 h-auto my-56 container text-center">
        <h1 className='font-bold font-sans tracking-wide text-7xl lg:text-7xl subpixel-antialiased'>
          Aldrich Santiago
        </h1>
        <p className='font-bold font-sans text-3xl lg:text-3xl subpixel-antialiased text-slate-500'>
          Full-Stack Web Developer
        </p>
      </div>
      
      <div id='projects' className="container h-screen">
      <motion.div className="flex items-center justify-center h-full">
        <div className="flex flex-wrap justify-center gap-20">
          {projects.map((item) => (
            <motion.div
              className={`h-40 card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 delay-100 ${
                selectedId === item.id ? 'card-selected' : ''
              } scale-100 hover:scale-110 transform-gpu transition-opacity`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
              transition={{ duration: 0.3 }}
            >
              <div className="card-content max-w-sm p-3">
                <motion.h2 className="text-xl font-bold mb-2 text-black">{item.title}</motion.h2>
                <motion.h5 className="text-sm font-bold mb-1 text-slate-500">{item.subtitle}</motion.h5>
              </div>
            </motion.div>
          ))}
          <div
            className={`w-[380px] h-40 card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-110`}>
            <div className="flex flex-col items-center max-w-sm p-3 gap-4">
              <h2 className="text-2xl font-bold mb-2 text-black hover:scale-110 transition-transform">View more projects</h2>
              <h5 className="text-4xl font-bold hover:scale-110 transition-transform"><FaGithub/></h5>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
            >
              {projects.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md max-w-full md:w-[800px] mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <motion.div className="relative p-5">
                      <motion.button
                        className="absolute top-2 right-2 p-2 text-center text-white bg-black rounded-full"
                        onClick={() => setSelectedId('')}
                      >
                        <FaXmark/>
                      </motion.button>
                      <motion.h2 
                      className={`text-4xl font-bold mb-2 
                      ${item.title === "Zaza Co."? "text-green-600":""} 
                      ${item.title === "Weather Application"? "text-blue-600":""}
                      ${item.title === "My Portfolio Site"? "text-violet-600":""} `}
                      >{item.title}</motion.h2>
                      <motion.h5 className="text-lg font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                      <motion.p className="text-md text-gray-700 mb-4 indent-10">{item.description}</motion.p>
                      <motion.p
                        className="text-md text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Additional content can go here!
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="1" d="M0,64L18.5,106.7C36.9,149,74,235,111,266.7C147.7,299,185,277,222,245.3C258.5,213,295,171,332,128C369.2,85,406,43,443,69.3C480,96,517,192,554,208C590.8,224,628,160,665,154.7C701.5,149,738,203,775,208C812.3,213,849,171,886,160C923.1,149,960,171,997,165.3C1033.8,160,1071,128,1108,101.3C1144.6,75,1182,53,1218,64C1255.4,75,1292,117,1329,122.7C1366.2,128,1403,96,1422,80L1440,64L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
      <div id='contact' className="pt-32 h-screen bg-black">
        <div className="container w-2/3 flex flex-col items-center justify-center">
        <form action="https://formbold.com/s/oPaza" method="post" className='w-full flex flex-col items-center justify-center gap-6'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl text-white mb-12">
              Get in touch.
            </h1>
          
            <input type="email" name="email" id="email" placeholder='Email' className='w-2/3 h-14 rounded-lg text-xl py-1 px-3 font-medium tracking-tight focus:outline-none'/>
            <input type="text" name="subject" id="Subject" placeholder='Subject' className='w-2/3 h-14 rounded-lg text-xl py-1 px-3 font-medium tracking-tight focus:outline-none'/>
            <textarea name="message" id="message" placeholder='Enter your message here' className='w-2/3 h-44 rounded-lg resize-none text-xl py-4 px-3 font-medium tracking-tight focus:outline-none'></textarea>

            <button type='submit' className='w-2/3 h-20 rounded-lg border-none bg-emerald-50 py-2 px-12 text-3xl font-bold tracking-wider hover:text-white hover:bg-emerald-500 transition-colors flex items-center gap-2 justify-center'><FaRegPaperPlane/>SEND MESSAGE</button>
          </form>
        </div>
        
      </div>

    </>
  )
}

export default App
