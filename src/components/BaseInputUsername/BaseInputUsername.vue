<template>
  <div class="base-input-username">
    <input class="input-item" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-input-username {
  width: 100%;
  position: relative;
}
.input-item {
  border-radius: 3px;
  font-size: 1.5em;
  padding: 10px;
  width: 100%;
  color: var(--color-white);
  border-bottom: var(--color-light-black) solid 1px;
}
</style>
