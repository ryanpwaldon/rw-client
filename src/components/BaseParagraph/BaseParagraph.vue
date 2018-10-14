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
  color: var(--color-dark-gray);
  display: inline-block;
  max-width: 600px;
  margin-bottom: 50px;
}
</style>
