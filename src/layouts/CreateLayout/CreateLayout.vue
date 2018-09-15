<template>
  <transition name="fade" mode="out-in">
    <component :is="layout">
      <slot/>
    </component>
  </transition>
</template>

<script>
import { LAYOUTS } from '@/constants'
export default {
  computed: {
    layout () {
      return this.$route.meta.layout
        ? LAYOUTS[this.$route.meta.layout]
        : LAYOUTS['Default']
    }
  }
}
</script>
