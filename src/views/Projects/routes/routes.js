import { PROJECTS } from '@/constants'

const routes = []

for (const project of PROJECTS) {
  routes.push({
    path: `/projects/${project.path}`,
    name: project.path,
    component: () => import('@/views/Projects/views/Project/Project'),
    props: { project },
    meta: {
      layout: 'Main',
      accessLevel: 1
    }
  })
}

export default routes
