<template>
  <div class="base-input">
    <input class="input-item" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  position: relative;
  * { user-select: auto }
}
.input-item {
  border-radius: 3px;
  font-size: 1em;
  padding: 10px;
  width: 100%;
  color: var(--color-black);
  border-radius: 3px;
  transition: var(--transition-default);

  &::placeholder {
    color: var(--color-gray);
  }

  &:focus {
    background: var(--color-lighter-gray);
  }
}
</style>
