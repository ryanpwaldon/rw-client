<template>
  <div class="default-layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'default-layout'
}
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;
}
</style>
