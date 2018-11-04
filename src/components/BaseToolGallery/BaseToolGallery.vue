<template>
  <div class="base-tool-gallery">
    <div class="tool-container" v-for="(tool, index) in tools" :key="index">
      <div class="tool-item" :style="{backgroundImage: `url(${tool.iconPath})`}"></div>
    </div>
  </div>
</template>

<script>
import { TOOLS } from '@/constants'
export default {
  data () {
    return {
      tools: TOOLS
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tool-gallery {
  width: 100%;
  border-top: solid var(--color-light-gray) 1px;
  border-bottom: solid var(--color-light-gray) 1px;
  background: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 20px;
}
.tool-container {
  width: 10%;
  position: relative;
  border-radius: 100%;
  background: var(--color-lighter-gray);
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.05);
}
.tool-item {
  width: 100%;
  padding-top: 100%;
  background-size: 50% 50%;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
