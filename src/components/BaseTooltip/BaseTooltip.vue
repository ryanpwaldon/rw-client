<template>
  <div class="base-tooltip">
    {{ name }}
    <div class="tooltip-container">
      <div class="tooltip-title" v-html="name"/>
      <div class="tooltip-paragraph" v-html="description"/>
    </div>
  </div>
</template>

<script>
import { TOOLTIPS } from '@/constants'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    description () {
      return TOOLTIPS[this.name].description
    },
    color () {
      return TOOLTIPS[this.name].color
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tooltip {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.base-tooltip:hover .tooltip-container {
  opacity: 1;
}
.tooltip-container {
  transition: var(--default-transition);
  position: absolute;
  width: 300px;
  opacity: 0;
  top: 100%;
  background: var(--color-black);
  color: var(--color-white);
  border-radius: 3px;
  padding: 5px;
  pointer-events: none;
}
.tooltip-paragraph {
  line-height: calc(1em + 5px);
}
</style>
