<template lang="html">
  <div class="ck-dropdown">
    <div
      v-click-outside="hide"
      class="ck-dropdown-content"
      :style="{ top: `${overlayTop}px` }"
      @click="showDropdown = !showDropdown"
    >
      <slot></slot>
    </div>
    <div
      v-if="showDropdown"
      ref="dropdownOverlay"
      :class="`ck-dropdown-overlay bg-${backgroundColor}`"
    >
      <slot name="overlay" />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  props: {
    backgroundColor: {
      type: String,
      default: () => {
        return 'white'
      }
    }
  },
  data() {
    return {
      showDropdown: false,
      overlayTop: 0
    }
  },
  mounted() {
    if (this.showDropdown) {
      this.overlayTop = this.$refs.dropdownOverlay.clientHeight
    }
  },
  methods: {
    hide() {
      this.showDropdown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-dropdown {
  @apply inline-block relative;

  .ck-dropdown-overlay {
    @apply absolute pin-l w-full shadow-md rounded-lg p-2 border-grey-light;
  }
}
</style>
