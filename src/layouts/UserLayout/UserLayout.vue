<template>
  <div class="user-layout">
    <BaseNav/>
    <BaseContainer>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/>
      </transition>
    </BaseContainer>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
export default {
  name: 'user-layout',
  components: {
    BaseContainer,
    BaseNav,
    BaseFooter
  }
}
</script>

<style lang="scss" scoped>
.user-layout {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-lighter-gray);
}
.base-nav {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
