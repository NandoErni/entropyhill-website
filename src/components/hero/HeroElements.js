import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { COLOR, FONT_SIZE } from '../Constants'

export const HeroContainer = styled.div`
  background: ${COLOR.sidebarBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.6) 100%
      ), 
      linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        transparent 100%
      );
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${COLOR.videoBackground};
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: ${COLOR.lightStroke};
  font-size: ${FONT_SIZE.xxxxl};
  text-align: center;

  @media screen and (max-width: 786px) {
    font-size: ${FONT_SIZE.xxxl};
  }

  @media screen and (max-width: 480px) {
    font-size: ${FONT_SIZE.xxl};
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${COLOR.lightStroke};
  font-size: ${FONT_SIZE.xl};
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 786px) {
    font-size: ${FONT_SIZE.xl};
  }

  @media screen and (max-width: 480px) {
    font-size: ${FONT_SIZE.l};
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: ${FONT_SIZE.l};
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: ${FONT_SIZE.l};
`