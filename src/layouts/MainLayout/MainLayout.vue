<template>
  <div class="main-layout">
    <BaseContainer>
      <BaseNav/>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseNav from '@/components/BaseNav/BaseNav'
export default {
  name: 'main-layout',
  components: {
    BaseContainer,
    BaseNav
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
}
</style>
