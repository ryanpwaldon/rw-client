<template>
  <div class="gallery">
    <div class="gallery-container">
      <BaseSubtitle text="Interactive grid"/>
      <div class="gallery-object">
        <Lock/>
      </div>
    </div>
  </div>
</template>

<script>
import RaycasterGrid from '@/views/Gallery/components/RaycasterGrid/RaycasterGrid'
import Lock from '@/views/Gallery/components/Lock/Lock'
import BaseSubtitle from '@/components/BaseSubtitle/BaseSubtitle'
export default {
  name: 'gallery',
  components: {
    RaycasterGrid,
    BaseSubtitle,
    Lock
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  flex: 1;
}
.gallery-container {
  width: 100%;
  height: 100%;
  background: var(--color-lighter-gray);
  display: flex;
  flex-direction: column;
}
.gallery-object {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
