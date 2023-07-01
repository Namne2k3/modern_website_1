import React from 'react'
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies </a></p> 
    <p><a href='#blog'>Library</a></p>
  </>
);

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>

      {/* navbar link */}
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img alt='' src={logo}></img>
        </div>

        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>

      {/* navbar sign */}
      <div className='gpt3__navbar-sign'>
        <p><a href='#signin'>Sign in</a></p>
        <button type='button'>Sign up</button>
      </div>

      {/* navbar menu  */}
      <div className='gpt3__navbar-menu'>
        { toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && 
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p><a href='#signin'>Sign in</a></p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
