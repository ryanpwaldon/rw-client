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
    title: 'Ayers Rock',
    client: 'Voyages',
    role: 'Sole developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'ayers-rock',
    imagePath: require('@/views/Projects/views/Project/assets/ayers-rock/1.png'),
    images: [
      require('@/views/Projects/views/Project/assets/ayers-rock/1.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/2.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/3.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/4.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/5.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/6.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/7.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/8.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/9.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/10.png')
    ],
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
    title: 'Digikit',
    client: 'Raine & Horne',
    role: 'Co developer',
    type: 'Single page website',
    subtitle: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    path: 'appraisal-cms',
    imagePath: require('@/views/Projects/views/Project/assets/appraisal-cms/thumbnail.png'),
    images: [
      require('@/views/Projects/views/Project/assets/appraisal-cms/1.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/2.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/3.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/4.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/5.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/6.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/7.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/8.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/9.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/10.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/11.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/12.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/13.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/14.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/15.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/16.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/17.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/18.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/19.png'),
      require('@/views/Projects/views/Project/assets/appraisal-cms/20.png')
    ],
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
    images: [
      require('@/views/Projects/views/Project/assets/win-qantas-points/1.png'),
      require('@/views/Projects/views/Project/assets/win-qantas-points/2.png'),
      require('@/views/Projects/views/Project/assets/win-qantas-points/3.png'),
      require('@/views/Projects/views/Project/assets/win-qantas-points/4.png'),
      require('@/views/Projects/views/Project/assets/win-qantas-points/5.png'),
      require('@/views/Projects/views/Project/assets/win-qantas-points/6.png')
    ],
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
    images: [
      require('@/views/Projects/views/Project/assets/homebrowse/1.png'),
      require('@/views/Projects/views/Project/assets/homebrowse/2.png'),
      require('@/views/Projects/views/Project/assets/homebrowse/3.png'),
      require('@/views/Projects/views/Project/assets/homebrowse/4.png'),
      require('@/views/Projects/views/Project/assets/homebrowse/5.png')
    ],
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
    images: [
      require('@/views/Projects/views/Project/assets/mapbox-sydney/1.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/2.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/3.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/4.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/5.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/6.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/7.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/8.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/9.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/10.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/11.png'),
      require('@/views/Projects/views/Project/assets/mapbox-sydney/12.png')
    ],
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
    images: [
      require('@/views/Projects/views/Project/assets/ayers-rock/1.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/2.png')
    ],
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
    images: [
      require('@/views/Projects/views/Project/assets/ayers-rock/1.png'),
      require('@/views/Projects/views/Project/assets/ayers-rock/2.png')
    ],
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
