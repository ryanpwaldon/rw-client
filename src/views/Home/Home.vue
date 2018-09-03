<template>
  <div class="home">
    <BaseContainer>
      <BaseTitle text="RYAN WALDON"/>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
export default {
  name: 'home',
  components: {
    BaseContainer,
    BaseTitle
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
