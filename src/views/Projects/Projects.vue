<template>
  <div class="projects">
    <BaseTitle text="Projects"/>
    <div class="projects-container">
      <div class="project-item" v-for="(project, index) in projects" :key="index">
        <BaseSubtitle :text="project.title"/>
        <BaseParagraph>{{ project.description }}</BaseParagraph>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseSubtitle from '@/components/BaseSubtitle/BaseSubtitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import { PROJECTS } from '@/constants'
export default {
  name: 'projects',
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseParagraph
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
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.projects /deep/ .base-paragraph {
  margin-bottom: 0px;
}
.project-item {
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 3px;
  transition: var(--transition-default);
  background: var(--color-lighter-gray);
  cursor: pointer;
}
.project-item:hover {
  box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
}
</style>
