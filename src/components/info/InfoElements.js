import styled from 'styled-components'
import { COLOR, FONT_SIZE } from '../Constants'

export const InfoContainer = styled.div`
  color: ${COLOR.lightStroke};
  background: ${({isLightThemed}) => (isLightThemed ? COLOR.lightBackground : COLOR.secondary)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({isImageAtStart}) => (isImageAtStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({isImageAtStart}) => (isImageAtStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: ${COLOR.primary};
  font-size: ${FONT_SIZE.m};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${FONT_SIZE.xxxxl};
  line-height: 1.1;
  font-weight: 600;
  color: ${({isLightThemed}) => (isLightThemed ? COLOR.secondary : COLOR.lightStroke)};

  @media screen and (max-width: 480px) {
    font-size: ${FONT_SIZE.xxl};
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: ${FONT_SIZE.l};
  line-height: 24px;
  color: ${({isLightThemed}) => (isLightThemed ? COLOR.secondary : COLOR.lightStroke)};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`