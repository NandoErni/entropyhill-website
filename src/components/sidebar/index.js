import React from 'react'
import { NAVIGATION } from '../Constants'
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute
} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        {NAVIGATION.map((item) => {
                return (<SidebarLink to={item.id} onClick={toggle}>{item.text}</SidebarLink>)
              })}
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute to='/signin'>Sign In</SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar