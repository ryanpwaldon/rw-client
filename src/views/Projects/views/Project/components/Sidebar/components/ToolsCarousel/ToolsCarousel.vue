<template>
  <div class="tools-carousel">
    <div class="header-container">
      <div class="icon-item" :style="{backgroundImage: `url(${tool.iconPath})`}"/>
      <div class="title-item" v-html="tool.name"/>
    </div>
    <div class="content-container" v-html="tool.description"></div>
  </div>
</template>

<script>
import { TOOLS } from '@/constants'
export default {
  props: {
    name: {
      type: String,
      requried: true
    }
  },
  computed: {
    tool () {
      return {
        name: this.name,
        ...TOOLS[this.name]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-carousel {
  color: var(--color-dark-gray);
  display: inline-block;
  & * { line-height: 1.4em; }
}
.header-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px;
}
.icon-item {
  width: 50px;
  height: 50px;
  background-size: 25px 25px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 100%;
  box-shadow: var(--default-box-shadow);
  margin-right: 15px;
}
.title-item {
  color: var(--color-black);
}
.content-container {
  margin: 15px;
  font-size: 0.9em;
}
</style>
