<template>
  <div class="base-nav">
    <div class="nav-container">
      <div class="nav-group-left">
        <router-link class="nav-item" :to="navItem.path" v-for="(navItem, index) in navItems" :key="index">
          {{ navItem.text }}
        </router-link>
      </div>
      <div class="nav-group-right">
        <BaseButtonLogout/>
        <BaseAvatar/>
      </div>
    </div>
  </div>
</template>

<script>
import { NAV_ITEMS } from '@/constants'
import BaseAvatar from '@/components/BaseAvatar/BaseAvatar'
import BaseButtonLogout from '@/components/BaseButtonLogout/BaseButtonLogout'
export default {
  components: {
    BaseAvatar,
    BaseButtonLogout
  },
  data () {
    return {
      navItems: NAV_ITEMS
    }
  }
}
</script>

<style lang="scss" scoped>
.base-nav {
  width: 100%;
}
.nav-container {
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-group-left {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.nav-group-right {
  display: flex;
  align-items: center;
}
.nav-item {
  margin-right: 40px;
  cursor: pointer;
  color: var(--color-black);
  transition: var(--default-transition);
  border-bottom: solid 1px rgba(0, 0, 0, 0);
  padding: 5px 0;
  &.router-link-exact-active,
  &:hover {
    border-bottom: solid 1px var(--color-black);
  }
  &:last-of-type {
    margin: 0;
  }
}
.base-button-logout {
  margin-right: 20px;
}
</style>
