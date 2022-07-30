import img1 from '../../images/svg-1.svg'
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'
import img4 from '../../images/svg-4.svg'
import {ABOUT, MUSIC, SHOWS, CONTACT, HOME} from '../Constants'

export const aboutSection = {
  id: ABOUT.id,
  isLightThemed: false,
  topLine: ABOUT.text,
  headline: 'Rock-Band yes!',
  description: 'Yobama did nothing wrong while doing his job.',
  buttonLabel: null,
  buttonDestination: null,
  isImageAtStart: true,
  image: img1,
  alt: 'Car',
}

export const musicSection = {
  id: MUSIC.id,
  isLightThemed: true,
  topLine: MUSIC.text,
  headline: 'This is Music!',
  description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
  buttonLabel: 'Spotify',
  buttonDestination: HOME.id,
  isImageAtStart: false,
  image: img2,
  alt: 'Car',
}

export const showsSection = {
  id: SHOWS.id,
  isLightThemed: false,
  topLine: SHOWS.text,
  headline: 'Live Shows - very nice!!',
  description: 'No shows :(',
  buttonLabel: null,
  buttonDestination: null,
  isImageAtStart: true,
  image: img3,
  alt: 'Car',
}

export const contactSection = {
  id: CONTACT.id,
  isLightThemed: true,
  topLine: CONTACT.text,
  headline: 'Interaction, Wow!',
  description: 'Contact us Contact us Contact us Contact us Contact us Contact us.',
  buttonLabel: 'Contact via E-mail',
  buttonDestination: HOME.id,
  isImageAtStart: false,
  image: img4,
  alt: 'Car',
}