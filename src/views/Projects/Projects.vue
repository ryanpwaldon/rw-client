<template>
  <div class="projects">
    <div class="columns-container">
      <div ref="column-item" class="column-item" v-for="n in columns" :key="n"/>
    </div>
    <!-- <BaseTitle class="intro-item" v-place-title text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."/> -->
    <div class="project-item" v-masonarise v-for="(project, index) in projects" :key="index" @click="$router.push({path: project.path, append: true})">
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
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseBrowser from '@/components/BaseBrowser/BaseBrowser'
import imagesLoaded from 'imagesloaded'
import { TweenMax } from 'gsap'
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
      projects: PROJECTS,
      columns: 2
    }
  },
  directives: {
    masonarise: {
      inserted (el, binding, vnode) {
        el.style.display = 'none'
        el.style.visibility = 'hidden'
        imagesLoaded(el, () => {
          // find column with shortest height (or if equal, the left most column)
          const suitableColumn = vnode.context.$refs['column-item'].reduce((acc, column) => {
            if (vnode.key === 2) console.log(acc.children.length, column.children.length)
            if (column.offsetHeight === acc.offsetHeight) return acc
            return column.offsetHeight < acc.offsetHeight ? column : acc
          })
          suitableColumn.appendChild(el)
          el.style.display = 'block'
          TweenMax.set(el, {autoAlpha: 1})
        })
      }
    },
    placeTitle: {
      inserted (el, binding, vnode) {
        vnode.context.$refs['column-item'][0].appendChild(el)
      }
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
  width: 100%;
}
.column-item {
  width: calc(50% - 50px);
}
.intro-item {
  margin-bottom: 100px;
}
.project-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
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
