<template>
  <div class="base-button-logout" @click="logout">
    Logout
  </div>
</template>

<script>
export default {
  name: 'base-button-logout',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-logout {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
