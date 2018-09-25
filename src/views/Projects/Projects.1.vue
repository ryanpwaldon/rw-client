<template>
  <div class="projects">
    <div class="projects-container">
      <div class="project-item" v-for="(project, index) in projects" :key="index" @click="$router.push({path: project.path, append: true})">
        <div class="project-image" :style="{backgroundImage: `url(${project.thumbnailPath})`}"/>
        <div class="project-content-container">
          <div class="title-container">
            <BaseSubtitle :text="project.title"/>
          </div>
          <BaseParagraph>{{ project.description }}</BaseParagraph>
        </div>
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
.projects /deep/ .base-paragraph,
.projects /deep/ .base-subtitle {
  margin-bottom: 0px;
}
.project-item {
  margin-bottom: 50px;
  cursor: pointer;
  display: flex;
}
.project-image {
  width: 150px;
  height: 150px;
  border-radius: 3px;
  background-position: center center;
  background-size: cover;
  margin-right: 20px;
}
.title-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  .base-subtitle {
    margin-right: 20px;
  }
}
</style>
