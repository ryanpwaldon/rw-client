<template>
  <div class="home">
    <div class="intro-container">
      <div class="intro-content-container">
        <BaseTitle :text="`
          Hi 👋 <span class='capitalize'>${$store.getters.user.userName}</span>,<br>
          Welcome to the works of Ryan Waldon.
        `"/>
        <BaseParagraph>
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Angular aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. I have a passion for building web applications, with a bonus specialty in web animaition.
        </BaseParagraph>
      </div>
    </div>
    <div class="skills-container">
      <BaseTitle text="Core skills"/>
      <div class="skill-items">
        <BaseSkill name="Vue"/>
        <BaseSkill name="Node + Express"/>
        <BaseSkill name="MongoDB"/>
        <BaseSkill name="Angular"/>
        <BaseSkill name="GSAP"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseSubtitle from '@/components/BaseSubtitle/BaseSubtitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseSkill from '@/components/BaseSkill/BaseSkill'
export default {
  name: 'home',
  components: {
    BaseTitle,
    BaseParagraph,
    BaseSubtitle,
    BaseSkill
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
}
.intro-container {
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 100px;
}
.base-title /deep/ .capitalize {
  text-transform: capitalize;
}
.base-paragraph {
  margin-bottom: 0;
}
.skills-container {
  text-align: center;
}
.skill-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -10px;
  max-width: 360px;
  margin: auto;
  & > * {
    margin: 10px;
  }
}
</style>
