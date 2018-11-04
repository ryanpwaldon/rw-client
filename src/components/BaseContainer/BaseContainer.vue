<template>
  <div class="base-container">
    <div class="base-container-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  padding: 80px 30px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
.base-container-inner {
  flex: 1;
  width: 100%;
  min-height: 100%;
  max-width: 900px;
  position: relative;
  display: flex;
}
</style>
