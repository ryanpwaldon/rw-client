<template>
  <router-link class="base-button-arrow" :to="path">
    <slot/>
    <div class="arrow-item">→</div>
  </router-link>
</template>

<script>
export default {
  name: 'base-button-arrow',
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-arrow {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.arrow-item {
  padding: 0 0.5em;
}
</style>
