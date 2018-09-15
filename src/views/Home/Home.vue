<template>
  <div class="home">
    <BaseTitle :text="`
      Hi 👋 <span class='capitalize'>${$store.getters.user.userName}</span>,<br>
      Welcome to the works of Ryan Waldon.
    `"/>
    <BaseParagraph>
      Lorem ipsum dolor sit amet, consectetur <BaseTooltip name="Vue"/> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Angular aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </BaseParagraph>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseTooltip from '@/components/BaseTooltip/BaseTooltip'
export default {
  name: 'home',
  components: {
    BaseContainer,
    BaseTitle,
    BaseNav,
    BaseParagraph,
    BaseTooltip
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.base-title /deep/ .capitalize {
  text-transform: capitalize;
}
</style>
