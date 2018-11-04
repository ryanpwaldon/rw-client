<template>
  <div class="home">
    <div class="intro-container">
      <div class="intro-content">
        <BaseTitle :text="`👋 Hi, <span class='capitalize'>${$store.getters.user.userName}</span>.`"/>
        <BaseParagraph>
          I build full stack web applications (primarily) with <span class="highlight">Vue.js</span>, <span class="highlight">Node + Express</span>, and <span class="highlight">MongoDB</span>. I've built websites for <span class="highlight">Fairfax</span>, <span class="highlight">Qantas</span>, <span class="highlight">Raine & Horne</span>, and <span class="highlight">HCF</span>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BaseParagraph>
        <div class="divider"/>
        <BaseTitle text="Software" style="margin-bottom: 5px;"/>
        <BaseParagraph class="subtitle">
          Tools I have worked with in developing production applications.
        </BaseParagraph>
        <div class="tools-container">
          <div class="tool-item" v-for="(tool, index) in tools" :key="index">
            <div class="tool-image" :style="{backgroundImage: `url(${tool.iconPath})`}"/>
          </div>
        </div>
        <!-- <br><br>
        <BaseParagraph>
          Essentials:<br>
          - I typically work with Vue, Node / Express, and Mongo<br>
          - This preference is not dependant upon any personal biases<br>
          - Happy to work with and learn any technology (including react)<br>
        </BaseParagraph> -->
      </div>
    </div>
    <!-- <BaseToolGallery/> -->
    <!-- <div class="hr"/>
    <div class="grid-container">
      <div class="grid-item" v-for="(tool, index) in tools" :key="index">
        <div class="icon-item" :style="{backgroundImage: `url(${tool.iconPath})`}"/>
      </div>
    </div> -->
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseButtonArrow from '@/components/BaseButtonArrow/BaseButtonArrow'
import BaseToolGallery from '@/components/BaseToolGallery/BaseToolGallery'
import { TOOLS } from '@/constants'
export default {
  name: 'home',
  components: {
    BaseTitle,
    BaseParagraph,
    BaseButtonArrow,
    BaseToolGallery
  },
  data () {
    return {
      tools: TOOLS
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
  align-self: center;
}
.intro-container {
  display: flex;
  position: relative;
  justify-content: center;
}
.intro-content {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.base-title {
  margin-bottom: 40px;
  /deep/ .capitalize {
    text-transform: capitalize;
  }
}
.base-paragraph {
  max-width: 540px;
}
.base-button-arrow {
  align-self: flex-start;
}
.hr {
  width: 100%;
  height: 1px;
  background: var(--color-light-gray);
  margin: 80px 0;
}
.grid-container {
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid var(--color-light-gray);
  border-left: 1px solid var(--color-light-gray);
}
.grid-item {
  width: 25%;
}
.icon-item {
  padding-top: 100%;
  background-size: auto 25%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  border-right: 1px solid var(--color-light-gray);
  border-bottom: 1px solid var(--color-light-gray);
}
/deep/ .highlight {
  color: var(--color-black);
}
/deep/ .base-paragraph {
  line-height: 1.6em;
}
.divider {
  width: 40px;
  height: 1px;
  margin: 50px 0;
  background: var(--color-light-gray);
}
.subtitle {
  color: var(--color-gray);
  margin-bottom: 40px;
}
.tools-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -20px;
  max-width: 540px;
}
.tool-image {
  width: 30px;
  height: 30px;
  background-size: 80% 80%;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 20px;
}
</style>
