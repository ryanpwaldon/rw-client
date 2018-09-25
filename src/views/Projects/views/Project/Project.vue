<template>
  <div class="project">
    <BaseTitle :text="project.title"/>
    <BaseParagraph>{{ project.description }}</BaseParagraph>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle/BaseTitle'
import BaseParagraph from '@/components/BaseParagraph/BaseParagraph'
export default {
  name: 'project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseTitle,
    BaseParagraph
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100%;
}
</style>
