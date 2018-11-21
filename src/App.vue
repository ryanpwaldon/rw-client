<template>
  <div id="app">
    <CreateLayout>
      <transition name="fade" mode="out-in" @before-enter="$root.$emit('beforeEnterTransition')">
        <router-view :key="$route.path"/>
      </transition>
    </CreateLayout>
  </div>
</template>

<script>
import CreateLayout from '@/layouts/CreateLayout/CreateLayout'
export default {
  components: {
    CreateLayout
  }
}
</script>
