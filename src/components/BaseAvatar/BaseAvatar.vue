<template>
  <div class="base-avatar">
    <div class="avatar-item" :style="{backgroundImage: `url(${$store.getters.user.userAvatar})`}"/>
  </div>
</template>

<script>
export default {
  name: 'base-avatar'
}
</script>

<style lang="scss" scoped>
.avatar-item {
  width: 45px;
  height: 45px;
  background-size: contain;
  background-position: center center;
  border-radius: 100%;
  background-color: var(--color-white);
  border: solid 1px var(--color-light-gray);
}
</style>
