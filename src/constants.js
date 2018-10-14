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
  'Heroku': {
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
    title: 'Mapbox + Sydney',
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
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'flight-tracker',
    imagePath: require('@/views/Projects/views/Project/assets/flight-tracker/thumbnail.jpg'),
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
    title: 'Appraisal CMS',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'appraisal-cms',
    imagePath: require('@/views/Projects/views/Project/assets/appraisal-cms/thumbnail.jpg'),
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
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'skateboard-builder',
    imagePath: require('@/views/Projects/views/Project/assets/skateboard-builder/thumbnail.jpg'),
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
    iconPath: require('@/assets/images/skills/vue.svg')
  },
  'Heroku': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/vue.svg')
  },
  'Angular': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/angular.svg')
  },
  'Node + Express': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/node.svg')
  },
  'MongoDB': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/mongo.svg')
  },
  'GSAP': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/gsap.svg')
  },
  'Mapbox': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/mapbox.svg')
  },
  'Contentful': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/contentful.svg')
  },
  'Python': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/python.svg')
  },
  'Typescript': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/typescript.svg')
  },
  'Webpack': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/webpack.svg')
  },
  'Gulp': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    iconPath: require('@/assets/images/skills/gulp.svg')
  }
}
