<template lang="html">
  <div v-if="visible" :class="sidebarClasses()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    side: {
      type: String,
      default: () => {
        return 'left'
      }
    },
    backgroundColor: {
      type: String,
      default: () => {
        return 'white'
      }
    },
    border: {
      type: String,
      default: () => {
        return 'right'
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
    },
    visible: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  methods: {
    sidebarClasses() {
      let classes = `ck-sidebar bg-${this.backgroundColor}`

      if (this.full) {
        classes += ' ck-sidebar-full'
      }

      if (this.side === 'left') {
        classes += ' pin-l'
      } else {
        classes += ' pin-r'
      }

      if (this.border === 'left') {
        classes += ` border-left border-${this.borderColor} border-${
          this.borderStyle
        }`
      } else if (this.border === 'right') {
        classes += ` border-right border-${this.borderColor} border-${
          this.borderStyle
        }`
      }

      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-sidebar {
  width: 5rem;
  transition: 0.5s all;
  @apply fixed h-screen pin-t overflow-y-scroll;
}

.ck-sidebar-full {
  width: 15rem;
}

.border-left {
  border-left-width: 1px;
}

.border-right {
  border-right-width: 1px;
}
</style>
