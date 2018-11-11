export const NAV_ITEMS = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Résumé', path: '/resume' },
  { text: 'Contact', path: '/contact' }
]

export const LAYOUTS = {
  Blank: () => import('@/layouts/BlankLayout/BlankLayout'),
  User: () => import('@/layouts/UserLayout/UserLayout')
}

export const PROJECTS = [
  {
    title: 'Digikit',
    client: 'Raine & Horne',
    role: 'Co developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'appraisal-cms',
    imagePath: require('@/views/Projects/views/Project/assets/appraisal-cms/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: `It's a Win-Win`,
    client: 'Qantas',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'win-qantas-points',
    imagePath: require('@/views/Projects/views/Project/assets/win-qantas-points/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: 'Homebrowse',
    client: 'Personal',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'homebrowse',
    imagePath: require('@/views/Projects/views/Project/assets/homebrowse/thumbnail.png'),
    links: {
      sitePath: 'http://homebrowse-vue-client.herokuapp.com/search',
      githubPath: 'http://homebrowse-vue-client.herokuapp.com/search'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: 'Always',
    client: 'Fairfax',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'mapbox-sydney',
    imagePath: require('@/views/Projects/views/Project/assets/mapbox-sydney/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: 'Flight Tracker',
    client: 'Qantas',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'flight-tracker',
    imagePath: require('@/views/Projects/views/Project/assets/flight-tracker/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: 'Skateboard Builder',
    client: 'Suncorp',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'skateboard-builder',
    imagePath: require('@/views/Projects/views/Project/assets/skateboard-builder/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  },
  {
    title: 'Ayers Rock',
    client: 'Voyages',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'ayers-rock',
    imagePath: require('@/views/Projects/views/Project/assets/ayers-rock/thumbnail.png'),
    links: {
      sitePath: 'https://discover.qantasbusinessrewards.com',
      githubPath: 'https://discover.qantasbusinessrewards.com'
    },
    tools: [
      'Vue',
      'Node + Express',
      'MongoDB',
      'GSAP',
      'Mapbox',
      'Angular'
    ]
  }
]

export const TOOLS = {
  'Vue': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/vue.svg')
  },
  'Heroku': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/heroku.svg')
  },
  'Angular': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/angular.svg')
  },
  'Node + Express': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/node.svg')
  },
  'MongoDB': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/mongo.svg')
  },
  'GSAP': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/gsap.svg')
  },
  'Mapbox': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/mapbox.svg')
  },
  'Contentful': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/contentful.svg')
  },
  'Python': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/python.svg')
  },
  'Typescript': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/typescript.svg')
  },
  'Webpack': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/webpack.svg')
  },
  'Gulp': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/img/skills/gulp.svg')
  }
}
