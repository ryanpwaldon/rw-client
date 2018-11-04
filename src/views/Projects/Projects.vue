<template>
  <div class="projects">
    <div class="columns-container">
      <div ref="column-item" class="column-item" v-for="n in columns" :key="n"/>
    </div>
    <div class="project-item" ref="project-item" v-for="(project, index) in projects" :key="index" @click="$router.push({path: project.path, append: true})">
      <div class="title-container">
        <div class="title-item" v-html="project.title"/>
        <div class="inline-separator">&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</div>
        <div class="role-item" v-html="project.role"/>
      </div>
      <BaseBrowser :image-path="project.imagePath"/>
    </div>
  </div>
</template>

<script>
import BaseBrowser from '@/components/BaseBrowser/BaseBrowser'
import imagesLoaded from 'imagesloaded'
import { PROJECTS } from '@/constants'
export default {
  name: 'projects',
  components: {
    BaseBrowser
  },
  data () {
    return {
      projects: PROJECTS,
      columns: 2
    }
  },
  mounted () {
    this.masonarize()
    window.addEventListener('resize', this.updateColumns, { passive: true })
  },
  destroyed () {
    window.removeEventListener('resize', this.updateColumns)
  },
  methods: {
    masonarize () {
      for (const [index, el] of this.$refs['project-item'].entries()) {
        el.style.display = 'none'
        // create promise to resolve once masonary element has been appended to column
        el.inserted = new Promise((resolve, reject) => {
          // wait for all preceding masonary elements to be appended before proceeding (to maintain order)
          Promise.all(this.$refs['project-item'].slice(0, index).map(item => item.inserted)).then(() => {
            imagesLoaded(el, () => {
              // find column with shortest height (or if equal, the left most column)
              const suitableColumn = this.$refs['column-item'].reduce((acc, column) => {
                if (column.offsetHeight === acc.offsetHeight) return acc
                return column.offsetHeight < acc.offsetHeight ? column : acc
              })
              suitableColumn.appendChild(el)
              el.style.display = 'block'
              resolve()
            })
          })
        })
      }
    },
    updateColumns () {
      const columns = this.columns
      window.innerWidth <= 500
        ? this.columns = 1
        : this.columns = 2
      if (columns !== this.columns) this.masonarize()
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 100%;
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
