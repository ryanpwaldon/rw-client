export const NAV_ITEMS = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact', path: '/contact' }
]

export const LAYOUTS = {
  Default: () => import('@/layouts/DefaultLayout/DefaultLayout'),
  Main: () => import('@/layouts/MainLayout/MainLayout')
}

export const SKILLS = {
  'Vue': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/vue.svg')
  },
  'Angular': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/angular.svg')
  },
  'Node + Express': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/node.svg')
  },
  'MongoDB': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/mongo.svg')
  },
  'GSAP': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/gsap.svg')
  },
  'Mapbox': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/mapbox.svg')
  },
  'Contentful': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconUrl: require('@/assets/images/skills/contentful.svg')
  }
}

export const PROJECTS = [
  {
    title: 'Win Qantas Points',
    description: 'Lorem ipsum dolor sit amet',
    path: 'win-qantas-points',
    imagePath: require('@/views/Projects/views/Project/assets/win-qantas-points/thumbnail.png')
  },
  {
    title: 'Mapbox + Sydney',
    description: 'Lorem ipsum dolor sit amet',
    path: 'mapbox-sydney',
    imagePath: require('@/views/Projects/views/Project/assets/mapbox-sydney/thumbnail.png')
  },
  {
    title: 'Flight Tracker',
    description: 'Lorem ipsum dolor sit amet',
    path: 'flight-tracker',
    imagePath: require('@/views/Projects/views/Project/assets/flight-tracker/thumbnail.jpg')
  },
  {
    title: 'Appraisal CMS',
    description: 'Lorem ipsum dolor sit amet',
    path: 'appraisal-cms',
    imagePath: require('@/views/Projects/views/Project/assets/appraisal-cms/thumbnail.jpg')
  },
  {
    title: 'Skateboard Builder',
    description: 'Lorem ipsum dolor sit amet',
    path: 'skateboard-builder',
    imagePath: require('@/views/Projects/views/Project/assets/skateboard-builder/thumbnail.jpg')
  }
]
