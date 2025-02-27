import React, { useState } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi';



const Navbar = () => {
  const [ toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      <h1 className='head-text'> lo<span>go </span> </h1>
      </div>
      <ul className='app__navbar-links'>
        {['collaborate', 'portfolio', 'about', 'contact'].map((item)=> (
            <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
                <a href={`#${item}`}>{item}</a>
            </li>
        )
        )}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=> setToggle(true)}/>

          {toggle && (
            <motion.div 
            whileInView={{ x: [300,0]}}
            transition={{duration:0.85,ease: 'easeInOut'}}>
              <HiX onClick={() => setToggle(false)}/>
                <ul>
                {['collaborate', 'portfolio', 'about', 'contact'].map((item)=> (
            <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
            </li>
        )
        )}
        </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar
