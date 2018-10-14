<template>
  <div class="projects-list">
    <div class="project-item" v-for="(project, index) in projects" :key="index" @click="$router.push(`/projects/${project.path}`)">
      <div class="image-container">
        <div class="image-item" :style="{backgroundImage: `url(${project.imagePath})`}"/>
      </div>
      <div class="title-item" v-html="project.title"/>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '@/constants'
export default {
  data () {
    return {
      projects: PROJECTS
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-list {
  --flex-columns: 3;
  --flex-item-spacing: 5%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 calc(-1 * var(--flex-item-spacing) / 2);
}
.project-item {
  display: flex;
  flex-direction: column;
  width: calc((100% / var(--flex-columns)) - ((var(--flex-columns) - 1) * var(--flex-item-spacing)) / (var(--flex-columns) - 1));
  margin: calc(var(--flex-item-spacing) / 2);
  cursor: pointer;
}
.image-container {
  width: 100%;
  position: relative;
  border: solid 1px var(--color-light-gray);
  padding: 15px;
  margin-bottom: 15px;
}
.image-item {
  padding-top: 66%;
  background-position: center top;
  background-size: 100% auto;
  border-radius: 3px;
}
</style>
