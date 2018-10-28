<template>
  <div class="contact">
    <BaseTitle text="Contact"/>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
export default {
  name: 'contact',
  components: {
    BaseTitle,
    BaseParagraph
  }
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100%;
}
</style>
