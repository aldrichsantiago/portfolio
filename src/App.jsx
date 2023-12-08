import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FaXmark, FaRegPaperPlane, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import projects from './projects.json'
import chat from './assets/chat_app.png'
import weather from './assets/weather_app.png'
import ecomm from './assets/ecomm_app.png'
import portfolio from './assets/portfolio_site.png'



function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)
  const [tap, setTap] = useState(false)

  useEffect(()=>{
    setEmail(null)
    setSubject(null)
    setMessage(null)

    addImagesToProjects();
    
  }, [])

  async function addImagesToProjects(){
    projects[0].image = ecomm
    projects[1].image = chat
    projects[2].image = weather
    projects[3].image = portfolio
  }
  

  return (
    <>
      <nav className="flex justify-center sm:justify-end items-center h-28 container fixed top-0 left-0 right-0 z-30">
        <ul className='h-full flex gap-2 sm:gap-6 items-center justify-end'>
          <li className='hover:scale-105 transition-transform'>
            <a href="#about" className=" hover:italic hover:uppercase bg-white hover:shadow-xl rounded-xl tracking-wide py-3 font-mono lowercase px-6 subpixel-antialiased font-semibold shadow-lg">
              About
            </a>
          </li>
          <li className='hover:scale-105 transition-transform'>
            <a href="#projects" className=" hover:italic hover:uppercase bg-white hover:shadow-xl rounded-xl tracking-wide py-3 font-mono lowercase px-6 subpixel-antialiased font-semibold shadow-lg">
              Projects
            </a>
          </li>
          <li className='hover:scale-105 transition-transform'>
            <a href="#contact" className=" hover:italic hover:uppercase bg-white hover:shadow-xl rounded-xl tracking-wide py-3 font-mono lowercase px-6 subpixel-antialiased font-semibold shadow-lg">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id='about' className="my-56 sm:container text-center">
        <h1 className='mt-24 font-black font-sans tracking- text-7xl lg:text-8xl italic subpixel-antialiased'>
          ALDRICH SANTIAGO
        </h1>
        <div className='flex flex-wrap justify-center gap-6'>
          
          <motion.p 
          animate={{  opacity:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          onHoverStart={()=>setTap(!tap)}
          onHoverEnd={()=>setTap(true)}
          className='font-bold font-sans text-3xl lg:text-4xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Front-End Developer
          </motion.p>
          <motion.p 
          animate={{ opacity:tap?1:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          className='font-bold font-sans text-4xl lg:text-6xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Software Developer
          </motion.p>
          <motion.p 
          animate={{  opacity:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          onHoverStart={()=>setTap(!tap)}
          onHoverEnd={()=>setTap(true)}
          className='font-bold font-sans text-3xl lg:text-4xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Back-End Developer
          </motion.p>
          <motion.p 
          animate={{  opacity:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          onHoverStart={()=>setTap(!tap)}
          onHoverEnd={()=>setTap(true)}
          className='font-bold font-sans text-3xl lg:text-4xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Full-Stack Developer
          </motion.p>
          <motion.p 
          animate={{  opacity:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          onHoverStart={()=>setTap(!tap)}
          onHoverEnd={()=>setTap(true)}
          className='font-bold font-sans text-3xl lg:text-4xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Software Engineer
          </motion.p>
          <motion.p 
          animate={{  opacity:0 }} 
          initial={{ opacity:0 }} 
          transition={{ type:"tween", duration:0.3, opacity:0 }}
          whileHover={{ opacity:1 }}
          whileTap={{ scale:1.5 }}
          onHoverStart={()=>setTap(!tap)}
          onHoverEnd={()=>setTap(true)}
          className='font-bold font-sans text-3xl lg:text-4xl antialiased text-slate-600 italic relative select-none cursor-pointer'>
            Web Developer
          </motion.p>
        </div>
        <div className="w-12 h-24 mt-12 flex flex-col items-center justify-center gap-4">
          <FaGithub size={30} className='hover:scale-110 transition-transform cursor-pointer' onClick={()=>{window.open("https://github.com/aldrichsantiago")}}/>
          <FaLinkedinIn size={30} className='hover:scale-110 transition-transform cursor-pointer' onClick={()=>{window.open("https://www.linkedin.com/in/aldrichsantiago")}}/>
        </div>

        <div className="w-auto mt-16 flex flex-col">
          <p className='font-bold font-sans text-4xl antialiased text-slate-600 italic select-none'>Languages, Frameworks & Libraries</p>
          <div className="p-12 sm:w-full flex overflow-x-scroll no-scrollbar items-center gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  className='w-[110px] select-none' alt='html'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='w-[110px] select-none' alt='css'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='w-[110px] select-none' alt='bootstrap'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-[110px] select-none' alt='tailwindcss'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-[110px] select-none' alt='javascript'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-[110px] select-none' alt='react'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className='w-[110px] select-none' alt='nodejs'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className='w-[110px] select-none' alt='expressjs'/>
            
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='w-[110px] select-none' alt='java'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='w-[110px] select-none' alt='python'/> */}
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className='w-[110px] select-none' alt='mysql'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className='w-[110px] select-none' alt='vscode'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className='w-[110px] select-none' alt='git'/>

          </div>
        </div>
      </div>
      
      <div id='projects' className="container h-screen">
      <motion.div className="flex items-center justify-center h-full">
        <div className="flex flex-wrap justify-center gap-20">
          {projects.map((item) => (
            <motion.div
              className={`h-40 card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 delay-100 hover:scale-110${
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
            onClick={()=>window.open("https://github.com/aldrichsantiago")}
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
                      className={`text-4xl font-bold mb-2 `}
                      >{item.title}</motion.h2>
                      <motion.h5 className="text-lg font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                      <motion.p className="text-md text-gray-700 mb-4 indent-10">{item.description}</motion.p>
                      <motion.p
                        className="text-md text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.img 
                        className='cursor-pointer'
                        whileTap={{ scale: 1.4 }}
                        animate={{scale:0.8, opacity: 1}}
                        initial={{scale:0, opacity: 0}}
                        loading='lazy'
                        src={item.image}/>
                        <motion.div className='flex flex-wrap gap-8'>
                          <motion.a target="_blank" className='shadow-md hover:scale-110 transition-transform w-28 py-2 flex justify-center items-center text-black  text-center font-medium rounded-lg bg-white' href={item.github_link}>
                            <svg className='inline mr-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                            Github</motion.a>
                          <motion.a target="_blank" className='shadow-md hover:scale-110 transition-transform w-28 py-2 flex justify-center items-center text-white text-center font-medium rounded-lg bg-blue-700' href={item.live_link}>
                            <svg viewBox="0 0 24 24" className='w-7 inline mr-1' fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier"> 
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#ffffff"></path> 
                              </g>
                            </svg>
                            Live</motion.a>
                        </motion.div>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='z-20 relative -bottom-1'>
        <path fill="#000000" fillOpacity="1" d="M0,64L18.5,106.7C36.9,149,74,235,111,266.7C147.7,299,185,277,222,245.3C258.5,213,295,171,332,128C369.2,85,406,43,443,69.3C480,96,517,192,554,208C590.8,224,628,160,665,154.7C701.5,149,738,203,775,208C812.3,213,849,171,886,160C923.1,149,960,171,997,165.3C1033.8,160,1071,128,1108,101.3C1144.6,75,1182,53,1218,64C1255.4,75,1292,117,1329,122.7C1366.2,128,1403,96,1422,80L1440,64L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
      <div id='contact' className="pt-48 sm:pt-32 h-screen bg-black z-20">
        <div className="sm:container w-full sm:w-2/3 flex flex-col items-center justify-center">
        <form action={`${import.meta.env.VITE_FORM_BOLD_URL}`} method="POST" className='w-full flex flex-col items-center justify-center gap-6'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl text-white mb-12">
              Get in touch.
            </h1>
          
            <input value={email} required onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email' className='w-2/3 h-14 rounded-lg text-xl py-1 px-3 font-medium tracking-tight focus:outline-none'/>
            <input value={subject} required onChange={(e)=>setSubject(e.target.value)} type="text" name="subject" id="Subject" placeholder='Subject' className='w-2/3 h-14 rounded-lg text-xl py-1 px-3 font-medium tracking-tight focus:outline-none'/>
            <textarea value={message} required onChange={(e)=>setMessage(e.target.value)} name="message" id="message" placeholder='Enter your message here' className='w-2/3 h-44 rounded-lg resize-none text-xl py-4 px-3 font-medium tracking-tight focus:outline-none'></textarea>

            <button type='submit' className='w-2/3 h-20 rounded-lg border-none bg-emerald-50 py-2 px-12 text-3xl font-bold tracking-wider hover:text-white hover:bg-emerald-500 transition-colors flex items-center gap-2 justify-center'><FaRegPaperPlane className='z-10'/>SEND MESSAGE</button>
          </form>
        </div>
        
      </div>

    </>
  )
}

export default App
