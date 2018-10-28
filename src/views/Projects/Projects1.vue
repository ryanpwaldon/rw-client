<template>
  <div class="projects">
    <div class="projects-container">
      <div class="project-item" v-for="(project, index) in projects" :key="index" @click="$router.push({path: project.path, append: true})">
        <div class="title-container">
          <div class="title-item" v-html="project.title"/>
          <div class="inline-separator">&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</div>
          <div class="role-item" v-html="project.role"/>
        </div>
        <BaseBrowser :image-path="project.imagePath"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBrowser from '@/components/BaseBrowser/BaseBrowser'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import { PROJECTS } from '@/constants'
export default {
  name: 'projects',
  components: {
    BaseTitle,
    BaseParagraph,
    BaseBrowser
  },
  data () {
    return {
      projects: PROJECTS
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 100%;
}
.base-title {
  margin-bottom: 50px;
}
.projects-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.project-item {
  width: calc(50% - 40px);
  margin-bottom: 80px;
  cursor: pointer;
}
.title-container {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  font-size: 1.2em;
  align-items: center;
  white-space: nowrap;
}
.inline-separator {
  font-size: 0.5em;
  color: var(--color-medium-gray);
}
.role-item {
  color: var(--color-medium-gray);
  font-size: 0.9em;
}
</style>
