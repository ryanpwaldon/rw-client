<template>
  <div class="project">
    <div class="intro-container">
      <BaseTitle :text="project.title"/>
      <BaseParagraph>{{ project.description }}</BaseParagraph>
    </div>
    <div class="content-container">
      <div class="image-container">
        <img class="image-item" :src="project.imagePath">
      </div>
      <Sidebar :project="project"/>
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import Sidebar from './components/Sidebar/Sidebar'
export default {
  name: 'project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseTitle,
    BaseParagraph,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100%;
}
.base-title {
  margin-bottom: 20px;
}
.intro-container {
  margin-bottom: 80px;
}
.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.image-container {
  border: solid var(--color-light-gray) 1px;
  border-radius: 3px;
  position: relative;
  width: 50%;
}
.image-item {
  width: 100%;
  height: auto;
  border-radius: 3px;
}
</style>
