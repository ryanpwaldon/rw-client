<template>
  <div class="login">
    <div class="component-container">
      <img class="lock-item" src="./assets/lock-icon.svg">
      <div class="form-container">
        <BaseInputUsername @input="username = $event"/>
        <BaseInputPassword @input="password = $event" @keypress.enter.native="login"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseInputPassword from '@/components/BaseInputPassword/BaseInputPassword'
import BaseInputUsername from '@/components/BaseInputUsername/BaseInputUsername'
export default {
  name: 'login',
  components: {
    BaseContainer,
    BaseInputPassword,
    BaseInputUsername
  },
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
      const username = this.username
      const password = this.password
      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.component-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.lock-item {
  width: 20px;
  margin-right: 30px;
}
.base-input {
  width: 100%;
  max-width: 300px;
}
</style>
