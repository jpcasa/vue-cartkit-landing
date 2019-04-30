<template lang="html">
  <div :class="topbarClasses()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: () => {
        return 'white'
      }
    },
    borderColor: {
      type: String,
      default: () => {
        return 'grey-light'
      }
    },
    borderStyle: {
      type: String,
      default: () => {
        return 'solid'
      }
    }
  },
  methods: {
    topbarClasses() {
      let classes = `ck-topbar bg-${this.backgroundColor}`
      classes += ` border-${this.borderColor} border-${this.borderStyle}`
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-topbar {
  border-bottom-width: 1px;
  @apply w-full fixed z-40 pin-t pin-r h-16;
}
</style>
