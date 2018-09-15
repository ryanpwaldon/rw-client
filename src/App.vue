<template>
  <div id="app">
    <CreateLayout>
      <transition name="fade" mode="out-in">
        <router-view/>
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
