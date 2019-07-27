<template>
  <div class="base-carousel">
    <div class="title-container">
      <div class="title-item">Gallery</div>
      <div class="meta-item">
        {{ selectedImageIndex + 1 }} / {{ imagePaths.length }}
      </div>
    </div>
    <div class="carousel-container">
      <div class="image-container">
        <div class="image-item-container" ref="image-item-container" v-for="(path, index) in imagePaths" :key="index">
          <img class="image-item" ref="image-item" :src="path">
        </div>
      </div>
      <div class="button left" @click="updateCarousel(selectedImageIndex - 1)">←</div>
      <div class="button right" @click="updateCarousel(selectedImageIndex + 1)">→</div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
export default {
  props: {
    imagePaths: {
      type: Array,
      required: true
    }
  },
  mounted () {
    window.addEventListener('keyup', this.keyControlsHandler)
    this.setTweens()
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyControlsHandler)
  },
  data () {
    return {
      selectedImageIndex: 0
    }
  },
  methods: {
    setTweens () {
      TweenMax.set([...this.$refs['image-item-container'].filter((item, i) => i !== this.selectedImageIndex)], {alpha: 0})
    },
    keyControlsHandler (e) {
      if (e.keyCode === 37) this.updateCarousel(this.selectedImageIndex - 1)
      if (e.keyCode === 39) this.updateCarousel(this.selectedImageIndex + 1)
    },
    updateCarousel (index) {
      if (index === -1) index = this.imagePaths.length - 1
      if (index === this.imagePaths.length) index = 0
      const next = this.$refs['image-item-container'][index]
      const prev = this.$refs['image-item-container'][this.selectedImageIndex]
      const others = this.$refs['image-item-container'].map((item, i) => { if (i !== index && i !== this.selectedImageIndex) return item })
      TweenMax.set(others, {alpha: 0})
      TweenMax.to(next, 0.5, {alpha: 1, ease: Power4.easeOut, onStart: () => TweenMax.set(next, {zIndex: 1})})
      TweenMax.to(prev, 0.5, {alpha: 0, ease: Power4.easeIn, onStart: () => TweenMax.set(prev, {zIndex: 0})})
      this.selectedImageIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  margin-bottom: 2em;
  justify-content: space-between;
}
.title-item {
  border-bottom: solid var(--color-black) 1px;
  padding-bottom: 2px;
}
.carousel-container {
  width: 100%;
  position: relative;
  margin-bottom: 2em;
  &:hover .button { opacity: 1; }
}
.image-container {
  padding-top: 65%;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--default-box-shadow);
}
.image-item-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--color-white);
}
.image-item {
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}
.button {
  position: absolute;
  width: 4em;
  height: 4em;
  background: rgba(0, 0, 0, 0.8);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  cursor: pointer;
  transition: var(--default-transition);
  z-index: 2;
  &.left {
    left: 0;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  &.right {
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
}
</style>
