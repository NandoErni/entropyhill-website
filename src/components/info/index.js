import React from 'react'
import { Button } from '../ButtonElements'
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements'

const Info = ({id, isLightThemed, topLine, headline, description, buttonLabel, buttonDestination, isImageAtStart, image, alt}) => {
  return (
    <>
      <InfoContainer isLightThemed={isLightThemed} id={id}>
        <InfoWrapper>
          <InfoRow isImageAtStart={isImageAtStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading isLightThemed={isLightThemed}>{headline}</Heading>
                <Subtitle isLightThemed={isLightThemed}>{description}</Subtitle>
                {buttonLabel ?
                  (<BtnWrap>
                    <Button to={buttonDestination} 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={isLightThemed ? 0 : 1}
                    dark={isLightThemed ? 0 : 1}>
                      {buttonLabel}
                    </Button>
                  </BtnWrap>) : (<></>)
                }
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info