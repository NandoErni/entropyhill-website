import React, {useState} from 'react'
import Video from '../../videos/video_jesus.mp4'
import { Button } from '../ButtonElements'
import { HOME, SHOWS } from '../Constants'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id={HOME.id}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Entropy Hill</HeroH1>
        <HeroP>Rock-Band un so lol</HeroP>
        <HeroBtnWrapper>
          <Button to={SHOWS.id} 
                  onMouseEnter={onHover} 
                  onMouseLeave={onHover} 
                  primary='true' 
                  dark='true'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
            {SHOWS.text} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero