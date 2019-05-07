<template lang="html">
  <div class="ck-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ck-button-group {
  @apply inline-block;

  .ck-button {
    margin-right: -6px;
    @apply rounded-none;

    &:hover {
      @apply z-10;
    }

    &:first-of-type {
      @apply rounded-l-lg;
    }

    &:last-of-type {
      @apply rounded-r-lg;
    }
  }
}
</style>
