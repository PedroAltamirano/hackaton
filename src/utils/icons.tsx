import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faEnvelope,
  faMobileAlt,
  faDatabase,
  faPhoneAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedinIn,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faLaravel,
  faNodeJs,
  faLinux,
  faPython,
  faBootstrap,
  faPhp,
} from '@fortawesome/free-brands-svg-icons'

const ICONS = {
  envelop: faEnvelope,
  mobile: faMobileAlt,
  db: faDatabase,
  phone: faPhoneAlt,
  marker: faMapMarkerAlt,

  github: faGithub,
  linkedin: faLinkedinIn,
  html: faHtml5,
  css: faCss3Alt,
  js: faJs,
  react: faReact,
  laravel: faLaravel,
  node: faNodeJs,
  linux: faLinux,
  python: faPython,
  bootstrap: faBootstrap,
  php: faPhp,
}

export const getIcon = (icon: string, options?: any) => (
  // eslint-disable-next-line
  // @ts-ignore
  <FontAwesomeIcon icon={ICONS[icon]} fixedWidth {...options} />
)
