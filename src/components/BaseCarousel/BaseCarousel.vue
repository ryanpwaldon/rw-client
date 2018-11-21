<template>
  <div class="base-carousel">
    <div class="carousel-container">
      <div class="image-container">
        <img class="image-item" :src="imagePath">
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
.carousel-container {
  width: 100%;
  position: relative;
  border-top: solid var(--color-light-gray) 1px;
  border-bottom: solid var(--color-light-gray) 1px;
  background: white;
}
.image-container {
  padding-top: 70%;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}
.image-item {
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
