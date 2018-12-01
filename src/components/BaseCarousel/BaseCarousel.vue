<template>
  <div class="base-carousel">
    <div class="carousel-container">
      <div class="image-container">
        <img class="image-item" ref="image-item" :src="path" v-for="(path, index) in imagePaths" :key="index">
      </div>
      <div class="button left" @click="updateCarousel(selectedImageIndex - 1)">←</div>
      <div class="button right" @click="updateCarousel(selectedImageIndex + 1)">→</div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Power4 } from 'gsap'
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
      TweenMax.set([...this.$refs['image-item'].filter((item, i) => i !== this.selectedImageIndex)], {alpha: 0})
    },
    keyControlsHandler (e) {
      if (e.keyCode === 37) this.updateCarousel(this.selectedImageIndex - 1)
      if (e.keyCode === 39) this.updateCarousel(this.selectedImageIndex + 1)
    },
    updateCarousel (index) {
      if (this.isAnimating) return
      this.isAnimating = true
      if (index === -1) index = this.imagePaths.length - 1
      if (index === this.imagePaths.length) index = 0
      const next = this.$refs['image-item'][index]
      const prev = this.$refs['image-item'][this.selectedImageIndex]
      this.selectedImageIndex = index
      const tl = new TimelineMax({onComplete: () => (this.isAnimating = false)})
      tl.to(next, 0.5, {
        alpha: 1,
        ease: Power4.easeOut,
        onStart: () => TweenMax.set(next, {zIndex: 1}),
        onComplete: () => {
          TweenMax.set(prev, {alpha: 0})
          TweenMax.set([next, prev], {zIndex: 0})
        }
      })
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
  &:hover .button { opacity: 1; }
}
.image-container {
  padding-top: 70%;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}
.image-item {
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button {
  position: absolute;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 2em;
  opacity: 0;
  cursor: pointer;
  box-shadow: var(--default-box-shadow);
  transition: var(--default-transition);
  z-index: 2;
  &.left { left: 0; }
  &.right { right: 0; }
}
</style>
