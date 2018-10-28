<template>
  <div class="base-footer">
    <div class="footer-container">
      <div class="content-item">
        View this site on github.
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-footer {
  width: 100%;
  background: var(--color-white);
  border-top: solid 1px var(--color-light-gray);
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  height: 66px;
}
</style>
