<template>
  <div class="base-button-logout">
    LOGOUT
  </div>
</template>

<script>
export default {
  name: 'base-button-logout',
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-logout {
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px;
}
</style>
