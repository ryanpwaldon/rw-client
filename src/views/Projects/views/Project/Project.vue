<template>
  <div class="project">
    <BaseTitle :text="project.title"/>
    <div class="subtitle-container">
      <div class="subtitle-item" v-html="project.client"/>
      <div class="subtitle-item" v-html="project.role"/>
    </div>
    <div class="content-container">
      <BaseParagraph>{{ project.description }}</BaseParagraph>
      <div class="spacer"/>
      <Sidebar :project="project"/>
    </div>
    <div class="image-frame">
      <div class="image-container">
        <img class="image-item" :src="project.imagePath">
      </div>
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
  margin-bottom: 5px;
}
.subtitle-container {
  margin-bottom: 60px;
  display: flex;
  align-items: center;
}
.inline-separator {
  color: var(--color-medium-gray);
  font-size: 0.5em;
}
.subtitle-item {
  color: var(--color-medium-gray);
  font-size: 0.9em;
  display: flex;
  align-items: center;
  &:first-child {
    border-bottom: solid var(--color-medium-gray) 1px;
    padding-bottom: 2px;
  }
  &:not(:first-child)::before {
    content: '•';
    font-size: 0.5em;
    padding: 0 8px;
  }
}
.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 80px;
}
.spacer {
  width: 10%;
  flex-shrink: 0;
}
.image-frame {
  width: 100%;
  border-radius: 3px;
  position: relative;
  border: solid var(--color-light-gray) 1px;
  background: repeating-linear-gradient(-55deg, var(--color-light-gray), var(--color-light-gray) 1px, var(--color-white) 1px, var(--color-white) 8px);
}
.image-container {
  padding-top: 80%;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}
.image-item {
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
