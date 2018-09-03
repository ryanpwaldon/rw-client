<template>
  <div id="app">
    <router-view/>
    <BaseButtonLogout v-if="$route.name !== 'login'"/>
  </div>
</template>

<script>
import BaseButtonLogout from '@/components/BaseButtonLogout/BaseButtonLogout'
export default {
  components: {
    BaseButtonLogout
  }
}
</script>
