<template>
  <div class="base-title-divider">
    <div class="line-item"/>
    <div class="title-item" v-html="text"/>
    <div class="line-item"/>
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
.base-title-divider {
  margin: 100px 0;
  display: flex;
  align-items: center;
}
.title-item {
  font-size: 1em;
  margin: 0 20px;
  white-space: nowrap;
}
.line-item {
  height: 1px;
  width: 100%;
  background: var(--color-light-gray);
}
</style>
