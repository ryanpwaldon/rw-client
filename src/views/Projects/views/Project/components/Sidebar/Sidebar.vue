<template>
  <div class="sidebar">
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">
        <img src="@/assets/images/icons/new-tab.svg">
        Site
      </div>
      <div class="item-value">{{ project.links.sitePath }}</div>
    </div>
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">
        <img src="@/assets/images/icons/github.svg">
        Github
      </div>
      <div class="item-value">https://github.com/ryanpwaldon/qbr-winwin</div>
    </div>
    <div class="separator"/>
    <div class="sidebar-item">
      <div class="item-title">Tools</div>
      <div class="item-value tools-container">
        <span
          v-for="(tool, index) in project.tools"
          :class="['tool-item', selectedToolIndex === index ? 'tool-item-selected' : 'tool-item-unselected']"
          @click="selectedToolIndex = index"
          :key="index">
          {{ tool }}
        </span>
      </div>
    </div>
    <div class="separator"/>
    <ToolsCarousel :name="project.tools[selectedToolIndex]"/>
  </div>
</template>

<script>
import ToolsCarousel from './components/ToolsCarousel/ToolsCarousel'
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    ToolsCarousel
  },
  data () {
    return {
      selectedToolIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 40%;
  display: flex;
  flex-direction: column;
}
.separator {
  width: 100%;
  height: 1px;
  background: var(--color-light-gray);
}
.sidebar-item.link {
  width: 100%;
  transition: var(--default-transition);
  cursor: pointer;
  &:hover {
    background: var(--color-lighter-gray);
  }
  .item-value {
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.item-title,
.item-value {
  margin: 15px;
  overflow: hidden;
  line-height: 1.4em;
  font-size: 0.9em;
}
.item-title {
  display: flex;
  align-items: center;
  & img {
    height: 1em;
    margin-right: 5px;
  }
}
.item-value {
  color: var(--color-gray);
}
.tools-container {
  margin: 10px;
}
.tool-item {
  cursor: pointer;
  transition: var(--default-transition);
  background: var(--color-lighter-gray);
  border-radius: 100px;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
}
.tool-item-selected,
.tool-item:hover {
  color: var(--color-white);
  background: var(--color-black);
}
</style>
