<template>
  <div class="sidebar">
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">Site</div>
      <div class="item-value">{{ project.links.sitePath }}</div>
    </div>
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">Github</div>
      <div class="item-value">https://github.com/ryanpwaldon/qbr-winwin</div>
    </div>
    <div class="separator"/>
    <div class="sidebar-item">
      <div class="item-title">Tools</div>
      <div class="item-value">
        <template v-for="(tool, index) in project.tools">
          <span
            :class="['tool-item', selectedToolIndex === index ? 'tool-item-selected' : 'tool-item-unselected']"
            :key="index"
            @click="selectedToolIndex = index">
            {{ tool }}
          </span>
          <span :key="index">{{ index !== project.tools.length - 1 ? ', ' : '' }}</span>
        </template>
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
.item-value {
  color: var(--color-gray);
}
.tool-item {
  cursor: pointer;
  transition: var(--default-transition);
  border-bottom: solid rgba(0, 0, 0, 0) 1px;
  display: inline-block;
  padding: 5px 0;
}
.tool-item-selected,
.tool-item:hover {
  color: var(--color-black);
  border-bottom: solid var(--color-black) 1px;
}
</style>
