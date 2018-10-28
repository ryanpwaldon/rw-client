<template>
  <div class="home">
    <div class="intro-container">
      <div class="intro-content">
        <BaseTitle :text="`👋 Hi, <span class='capitalize'>${$store.getters.user.userName}</span>`"/>
        <BaseParagraph>
          I build full stack web applications with <span class="highlight">Vue.js</span>, <span class="highlight">Node + Express</span>, and <span class="highlight">MongoDB</span>. I've built websites for <span class="highlight">Fairfax</span>, <span class="highlight">Qantas</span>, <span class="highlight">Raine & Horne</span>, and <span class="highlight">HCF</span>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BaseParagraph>
        <BaseButtonArrow path="/projects">
          See projects
        </BaseButtonArrow>
        <!-- <br><br>
        <BaseParagraph>
          Essentials:<br>
          - I typically work with Vue, Node / Express, and Mongo<br>
          - This preference is not dependant upon any personal biases<br>
          - Happy to work with and learn any technology (including react)<br>
        </BaseParagraph> -->
      </div>
    </div>
    <div class="hr"/>
    <div class="grid-container">
      <div class="grid-item" v-for="(tool, index) in tools" :key="index">
        <div class="icon-item" :style="{backgroundImage: `url(${tool.iconPath})`}"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
import BaseButtonArrow from '@/components/BaseButtonArrow/BaseButtonArrow'
import { TOOLS } from '@/constants'
export default {
  name: 'home',
  components: {
    BaseTitle,
    BaseParagraph,
    BaseButtonArrow
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
}
.intro-container {
  display: flex;
  position: relative;
}
.intro-content {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
}
.base-title {
  margin-bottom: 10px;
  /deep/ .capitalize {
    text-transform: capitalize;
  }
}
.base-paragraph {
  margin-bottom: 20px;
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
  display: inline-block;
  color: var(--color-blue);
  background: white;
  padding: 2px 2px;
  border: solid 1px var(--color-light-gray);
  border-radius: 3px;
}
/deep/ .base-paragraph {
  line-height: 1.6em;
}
</style>
