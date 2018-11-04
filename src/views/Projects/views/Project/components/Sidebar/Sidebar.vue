<template>
  <div class="sidebar">
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">
        <img src="@/assets/img/icons/new-tab.svg">
        Site
      </div>
      <div class="item-value">{{ project.links.sitePath }}</div>
    </div>
    <div class="separator"/>
    <div class="sidebar-item link">
      <div class="item-title">
        <img src="@/assets/img/icons/github.svg">
        Github
      </div>
      <div class="item-value">https://github.com/ryanpwaldon/qbr-winwin</div>
    </div>
    <div class="separator"/>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
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
    background: var(--color-white);
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
  color: var(--color-medium-gray);
}
</style>
