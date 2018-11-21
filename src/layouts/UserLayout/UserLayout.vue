<template>
  <div class="user-layout">
    <BaseNav/>
    <BaseContainer>
      <slot/>
    </BaseContainer>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseFooter from '@/components/BaseFooter/BaseFooter'
export default {
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
