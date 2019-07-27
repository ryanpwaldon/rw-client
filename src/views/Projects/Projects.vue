<template>
  <div class="projects">
    <div class="columns-container" ref="columns-container">
      <div ref="column-item" class="column-item" v-for="n in columns" :key="n">
        <div
          class="project-item"
          ref="project-item"
          v-for="(project, index) in projects"
          v-if="(index + n - 1) % columns === 0"
          @click="$router.push({path: project.path, append: true})"
          :key="index"
        >
          <div class="title-container">
            <div class="title-item" v-html="project.title"/>
            <div class="inline-separator">&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</div>
            <div class="role-item" v-html="project.role"/>
          </div>
          <BaseBrowser :image-path="project.imagePath"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseBrowser from '@/components/BaseBrowser/BaseBrowser'
import { PROJECTS } from '@/constants'
export default {
  name: 'projects',
  components: {
    BaseLoader,
    BaseBrowser
  },
  mounted () {
    window.addEventListener('resize', this.updateColumns, { passive: true })
  },
  destroyed () {
    window.removeEventListener('resize', this.updateColumns)
  },
  data () {
    return {
      projects: PROJECTS,
      columns: 2
    }
  },
  methods: {
    updateColumns () {
      window.innerWidth <= 620
        ? this.columns = 1
        : this.columns = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
}
.columns-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  margin: 0 -30px;
}
.column-item {
  width: 100%;
  margin: 30px;
}
.project-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
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
