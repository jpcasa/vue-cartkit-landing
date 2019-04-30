<template lang="html">
  <button :class="`ck-button ${type}`" @click="buttonClicked">
    <slot></slot>
    <i v-if="icon" :class="icon" />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return 'default'
      }
    },
    link: {
      type: String,
      default: () => {
        return ''
      }
    },
    icon: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    buttonClicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-button {
  transition: all 0.5s;
  @apply inline-block py-3 px-8 text-sm rounded-lg relative;

  i {
    right: 0.4rem;
    top: 0.65rem;
    @apply inline-block absolute text-xl;
  }

  &:focus {
    outline: none;
  }
}

.ck-button.default {
  @apply border border-grey-light text-grey-darkest;

  &:hover {
    @apply border-blue text-blue;
  }
}

.ck-button.primary {
  @apply bg-blue border-blue text-white;

  &:hover {
    @apply bg-blue-dark;
  }
}
</style>
