<template>
  <div class="base-browser">
    <div class="browser-container">
      <div class="browser-header">
        <div class="browser-icon-container">
          <div v-for="n in 3" :key="n" class="browser-icon"/>
        </div>
        <div class="browser-input-container"/>
      </div>
      <div class="browser-content">
        <img class="browser-image" :src="imagePath"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.browser-container {
  border: solid var(--color-light-gray) 1px;
  overflow: hidden;
  border-radius: 3px;
  background: var(--color-white);
}
.browser-header {
  height: 34px;
  width: 100%;
  background: #eef1f5;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.browser-icon-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
}
.browser-icon {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #9fadb6;
}
.browser-input-container {
  width: 100%;
  height: 60%;
  border-radius: 3px;
  background: var(--color-white);
}
.browser-content {
  width: 100%;
  // padding: 15px;
}
.browser-image {
  width: 100%;
  height: auto;
  display: block;
  // border-radius: 3px;
}
</style>
