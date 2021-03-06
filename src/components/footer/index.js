import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
 } from "./FooterElements";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Socialmedia</FooterLink>
              <FooterLink to='/'>Weiteres</FooterLink>
              <FooterLink to='/'>Und so</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Socialmedia</FooterLink>
              <FooterLink to='/'>Weiteres</FooterLink>
              <FooterLink to='/'>Und so</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Socialmedia</FooterLink>
              <FooterLink to='/'>Weiteres</FooterLink>
              <FooterLink to='/'>Und so</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Socialmedia</FooterLink>
              <FooterLink to='/'>Weiteres</FooterLink>
              <FooterLink to='/'>Und so</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Entropy Hill
            </SocialLogo>
            <WebsiteRights>Entropy Hill Copyright {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target='_blank' aria-label='Facebook'>
                <FaFacebook/>
              </SocialIconLink>

              <SocialIconLink href="/" target='_blank' aria-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>

              <SocialIconLink href="/" target='_blank' aria-label='Youtube'>
                <FaYoutube/>
              </SocialIconLink>

              <SocialIconLink href="/" target='_blank' aria-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>

              <SocialIconLink href="/" target='_blank' aria-label='Linkedin'>
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer