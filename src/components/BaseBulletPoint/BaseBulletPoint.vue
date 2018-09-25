<template>
  <div class="base-bullet-point">
    <div class="bullet-point-container">
      <div class="dash-item"/>
      <div class="text-item" v-html="text"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bullet-point-container {
  display: flex;
  align-items: center;
}
.dash-item {
  width: 200px;
  height: 1px;
  background: var(--color-black);
  margin-right: 10px;
}
</style>
