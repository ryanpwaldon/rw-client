<template>
  <div class="base-skill">
    <div class="skill-container">
      <img class="skill-image" :src="skill.iconUrl">
      <div class="skill-title">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import { SKILLS } from '@/constants'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      skill: SKILLS[this.name]
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-container {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px;
}
.skill-image {
  height: 50%;
  width: auto;
}
.skill-title {
  font-size: 1em;
  display: none;
}
</style>
