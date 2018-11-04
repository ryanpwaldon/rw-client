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
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  height: 66px;
  border-top: solid 1px var(--color-light-gray);
  padding: 10px 30px;
}
</style>
