import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { NAVIGATION } from '../Constants'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>Entropy Hill</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {NAVIGATION.map((item) => {
                return (<NavItem>
                          <NavLinks to={item.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>{item.text}</NavLinks>
                        </NavItem>)
              })}
            </NavMenu>
            {/* <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar