<template>
  <div class="projects">
    <div class="columns-container">
      <div ref="column-item" class="column-item" v-for="n in columns" :key="n"/>
    </div>
    <BaseTitle class="title-item" v-place-title text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."/>
    <div class="project-item" v-masonarise v-for="(project, index) in projects" :key="index" @click="$router.push({path: project.path, append: true})">
      <BaseBrowserMockup :image-path="project.imagePath"/>
      <div class="project-title" v-html="project.title"/>
      <div class="project-subtitle" v-html="project.subtitle"/>
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseSubtitle from '@/components/BaseSubtitle/BaseSubtitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseBrowserMockup from '@/components/BaseBrowserMockup/BaseBrowserMockup'
import imagesLoaded from 'imagesloaded'
import { TweenMax, Power4 } from 'gsap'
import { PROJECTS } from '@/constants'
export default {
  name: 'projects',
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseParagraph,
    BaseBrowserMockup
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
          TweenMax.to(el, 0.5, {autoAlpha: 1, ease: Power4.easeInOut})
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
  width: 45%;
}
.title-item {
  margin-bottom: 100px;
}
.project-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  cursor: pointer;
}
.base-browser-mockup {
  margin-bottom: 20px;
}
.project-title {
  font-size: 1.25em;
  margin-bottom: 10px;
}
.project-subtitle {
  font-size: 1em;
  opacity: 0.5;
}
</style>
