<template>
  <div class="base-subtitle" v-html="text"/>
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
.base-subtitle {
  font-size: 1em;
  line-height: 1em;
  padding: 5px 10px;
  background: var(--color-black);
  color: var(--color-white);
  display: inline-block;
  font-family: 'Inconsolata', monospace;
  margin-bottom: 20px;
}
</style>
