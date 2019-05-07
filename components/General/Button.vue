<template lang="html">
  <!-- eslint-disable -->
  <button
    class="ck-button"
    :class="`${type} ${size}-size ${animate ? 'animate' : ''} ${active ? 'active' : ''} ${icon ? 'with-icon' : ''}`"
    @click="buttonClicked"
  >
    <slot></slot>
    <i v-if="icon" :class="icon" />
  </button>
  <!-- eslint-enable -->
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
    icon: {
      type: String,
      default: () => {
        return ''
      }
    },
    size: {
      type: String,
      default: () => {
        return 'medium'
      }
    },
    active: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      animate: false
    }
  },
  methods: {
    buttonClicked() {
      this.$emit('clicked')
      this.animate = true
      setTimeout(() => (this.animate = false), 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-button {
  transition: all 0.5s;
  @apply inline-block rounded-lg relative;

  i {
    top: 1px;
    @apply inline-block relative;
  }

  &:focus {
    outline: none;
  }
}

.ck-button.small-size {
  @apply py-2 px-3 text-xs;
}

.ck-button.medium-size {
  @apply py-3 px-8 text-sm;
}

.ck-button.large-size {
  @apply py-4 px-12;
}

.ck-button.small-size.with-icon {
  @apply pr-0;

  i {
    @apply ml-2 pr-3;
  }
}

.ck-button.medium-size.with-icon {
  @apply pr-0;

  i {
    @apply ml-2 pr-5;
  }
}

.ck-button.default {
  @apply border border-grey-light text-grey-darkest;

  &:hover {
    @apply border-blue text-blue;
  }
}

.ck-button.default.active {
  @apply border-blue text-blue z-10;
}

.ck-button.primary {
  @apply bg-blue border border-blue text-white;

  &:hover {
    @apply bg-blue-dark;
  }
}

.ck-button.dashed {
  @apply border border-grey-light text-grey-darkest border-dashed;

  &:hover {
    @apply border-blue text-blue;
  }
}

.ck-button.danger {
  @apply bg-red border-red text-white;

  &:hover {
    @apply bg-red-dark;
  }
}

.ck-button.cancel {
  @apply border border-grey-light text-grey-darkest bg-grey-light;

  &:hover {
    @apply border-red text-red;
  }
}

.ck-button.disabled {
  @apply border border-grey-light text-grey-dark bg-grey-light cursor-not-allowed;
}

.ck-button.default.animate,
.ck-button.primary.animate,
.ck-button.dashed.animate {
  -webkit-animation: button-default 0.35s; /* Safari 4.0 - 8.0 */
  animation: button-default 0.35s;
}

.ck-button.danger.animate,
.ck-button.cancel.animate {
  -webkit-animation: button-danger 0.35s; /* Safari 4.0 - 8.0 */
  animation: button-danger 0.35s;
}

@-webkit-keyframes button-default {
  0% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
  }
  70% {
    -webkit-box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
    -moz-box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
    box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
  }
  100% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
  }
}

@keyframes button-default {
  0% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
  }
  70% {
    -webkit-box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
    -moz-box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
    box-shadow: 0px 0px 7px 2px rgba(0, 92, 255, 0.32);
  }
  100% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
  }
}

@-webkit-keyframes button-danger {
  0% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
    box-shadow: 0px 0px 11px -4px rgba(0, 92, 255, 0);
  }
  70% {
    -webkit-box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
    -moz-box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
    box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
  }
  100% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
  }
}

@keyframes button-danger {
  0% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
  }
  70% {
    -webkit-box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
    -moz-box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
    box-shadow: 0px 0px 7px 4px rgba(227, 52, 47, 0.32);
  }
  100% {
    webkit-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    -moz-box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
    box-shadow: 0px 0px 11px -4px rgba(227, 52, 47, 0);
  }
}
</style>
