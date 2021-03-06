
<template>
  <div class="login">
    <transition-group name="fade">
      <div class="login-container" v-if="!loading" :key="1">
        <div class="login-card-container">
          <div class="login-card-item">
            <div class="lock-item-container">
              <img class="lock-item" src="./assets/lock-icon.svg">
            </div>
            <BaseInput @input="userName = $event" type="text" placeholder="Username" @keypress.enter.native="userName && password ? login() : null"/>
            <div class="line"/>
            <BaseInput @input="password = $event" type="password" placeholder="Password" @keypress.enter.native="userName && password ? login() : null"/>
            <div class="line"/>
            <div
              :class="{'button-login-item': true, 'enabled': userName && password}"
              @click="userName && password ? login() : null">
              Login
            </div>
          </div>
        </div>
      </div>
      <div class="loading-container" v-if="loading" :key="2">
        <svg class="loader-item" ref="loader-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g stroke="var(--color-gray)" fill="none" stroke-miterlimit="10" stroke-width="5">
            <path ref="loader-item-outer" d="M50 0A50 50 0 1 1 0 50"/>
            <path ref="loader-item-inner" d="M50 75a25 25 0 1 1 25-25"/>
          </g>
        </svg>
        <svg ref="check-item" class="check-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="var(--color-green)"/>
          <path ref="check-stroke" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="7" d="M79.067 30.622L40.311 69.378 20.933 50"/>
        </svg>
        <svg ref="cross-item" class="cross-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="var(--color-red)"/>
          <path ref="cross-stroke-tl" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" d="M28.787 71.213l42.426-42.426"/>
          <path ref="cross-stroke-bl" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" d="M28.787 28.787l42.426 42.426"/>
        </svg>
      </div>
    </transition-group>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainer/BaseContainer'
import BaseInput from '@/components/BaseInput/BaseInput'
// eslint-disable-next-line
import DrawSVGPlugin from '@/assets/lib/DrawSVGPlugin'
import { TweenMax, Linear, Power4 } from 'gsap'
export default {
  name: 'login',
  components: {
    BaseContainer,
    BaseInput
  },
  data () {
    return {
      userName: null,
      password: null,
      loading: false
    }
  },
  methods: {
    login () {
      const userName = this.userName
      const password = this.password
      this.onAuthRequest()
      this.$store.dispatch('login', { userName, password })
        .then(() => {
          this.onAuthSuccess()
        })
        .catch(err => {
          this.onAuthError()
          console.log(err)
        })
    },
    onAuthRequest () {
      this.loading = true
      this.$nextTick(this.animateLoader)
    },
    onAuthSuccess () {
      TweenMax.to(this.$refs['loader-item'], 1, {autoAlpha: 0, ease: Power4.easeInOut})
      TweenMax.to(this.$refs['check-item'], 1, {autoAlpha: 1, ease: Power4.easeInOut})
      TweenMax.fromTo(this.$refs['check-stroke'], 1, {drawSVG: '100% 100%'}, {
        drawSVG: '0% 100%',
        ease: Power4.easeOut,
        delay: 0.5,
        onComplete: () => {
          setTimeout(() => this.$router.push('/'), 1000)
        }
      })
    },
    onAuthError () {
      this.userName = null
      this.password = null
      TweenMax.to(this.$refs['loader-item'], 1, {autoAlpha: 0, ease: Power4.easeInOut})
      TweenMax.to(this.$refs['cross-item'], 1, {autoAlpha: 1, ease: Power4.easeInOut})
      TweenMax.staggerFromTo(this.$refs['cross-item'].children, 1, {drawSVG: '0% 0%'}, {
        drawSVG: '0% 100%',
        ease: Power4.easeOut,
        delay: 0.5,
        onComplete: () => {
          setTimeout(() => { this.loading = false }, 1000)
        }
      }, 0.1)
    },
    animateLoader () {
      TweenMax.set(this.$refs['check-item'], {autoAlpha: 0})
      TweenMax.set(this.$refs['cross-item'], {autoAlpha: 0})
      TweenMax.set(this.$refs['loader-item'], {autoAlpha: 1})
      TweenMax.to(this.$refs['loader-item-outer'], 1, {rotation: 360, transformOrigin: 'center center', ease: Linear.easeNone, repeat: -1})
      TweenMax.to(this.$refs['loader-item-inner'], 1, {rotation: -360, transformOrigin: 'center center', ease: Linear.easeNone, repeat: -1})
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
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.login-card-container {
  padding: 30px;
  width: 350px;
}
.login-card-item {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.lock-item-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: var(--color-light-gray);
  margin-bottom: 20px;
}
.lock-item {
  width: 20px;
  margin-bottom: 5%;
}
.line {
  height: 1px;
  width: calc(100% - 8px);
  background: var(--color-light-gray);
  margin: auto;
  position: relative;
  border-radius: 100px;
}
.button-login-item {
  width: calc(100% - 8px);
  margin: auto;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  background: var(--color-light-gray);
  color: var(--color-gray);
  border-radius: 3px;
  cursor: not-allowed;
  user-select: none;
  transition: var(--default-transition);

  &.enabled {
    cursor: pointer;
    background: var(--color-blue);
    color: white;
  }
}
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-item, .cross-item, .check-item {
  width: 40px;
  overflow: visible;
  position: absolute;
}
</style>
