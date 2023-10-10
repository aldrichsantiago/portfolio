import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import projects from './projects.json'

function App() {
  const [count, setCount] = useState(0)
  const [incrementBy, setIncrementBy] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [item, setItem] = useState(null)
  

  return (
    <>
      <nav className="h-32 container fixed top-0 left-0 right-0">
        <ul className='h-full flex gap-12 items-center justify-center'>
          <li className='hover:scale-110 transition-transform'>
            <a href="#about" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              About
            </a>
          </li>
          <li className='hover:scale-110 transition-transform'>
            <a href="#projects" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              Projects
            </a>
          </li>
          <li className='hover:scale-110 transition-transform'>
            <a href="#contact" className="bg-white hover:shadow-xl rounded-xl tracking-wide py-3 px-6 subpixel-antialiased font-semibold shadow-sm">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div id='about' className="pt-32 h-auto mt-40 container text-center">
        <h1 className='font-bold font-sans tracking-wide text-7xl lg:text-7xl subpixel-antialiased'>
          Aldrich Santiago
        </h1>
        <p className='font-bold font-sans text-3xl lg:text-3xl subpixel-antialiased text-slate-500'>
          Front-End Web Developer
        </p>
      </div>
      
      <div id='projects' className="pt-32 h-screen">
      {projects.map(item => (
        <motion.div layoutId={item.id}
        className='bg-waves w-1/3 m-3'
        key={item.id}
        onClick={
          () => {
            setSelectedId(item.id)
            setItem(item)
           }
        }>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.button 
            onClick={
              () => {
                setSelectedId(null)
                setItem(null)
              }
            } />
          </motion.div>          
        )}
      </AnimatePresence>
        
      </div>
      <div id='contact' className="pt-32 h-screen container bg-slate-400">

      </div>

    </>
  )
}

export default App
