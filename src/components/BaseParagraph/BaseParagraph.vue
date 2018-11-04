<template>
  <div class="base-paragraph">
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-paragraph {
  font-size: 1em;
  line-height: 1.4em;
  color: var(--color-gray);
  display: inline-block;
}
</style>
