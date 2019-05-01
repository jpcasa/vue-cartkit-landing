<template lang="html">
  <div class="cartkit-card">
    <div v-if="title" class="title">
      <p>{{ title }}</p>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <i
      v-if="tooltip"
      v-tooltip.left="tooltip"
      class="tooltip icon-question-circle"
    />
    <div v-if="footer" class="footer">
      <p class="title">{{ footerTitle }}</p>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    tooltip: {
      type: String,
      default: () => {
        return ''
      }
    },
    footer: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    footerTitle: {
      type: String,
      default: () => {
        return 'title'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cartkit-card {
  @apply w-full bg-white rounded-lg shadow relative;

  .title {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    @apply px-8 py-4 text-blue-darkest border-grey-light;

    p {
      @apply m-0 mt-1;
    }
  }

  .content {
    @apply p-8;
  }

  .tooltip {
    @apply absolute text-xl cursor-pointer;
    right: 1rem;
    top: 1.1rem;

    &:hover {
      @apply text-blue;
    }
  }

  .footer {
    border-top-style: solid;
    border-top-width: 1px;
    @apply w-full border-grey-light px-8 py-6 relative;

    .title {
      top: -0.6rem;
      left: 1.3rem;
      border: none;
      text-transform: capitalize;
      @apply absolute p-0 px-3 bg-white;
    }
  }
}
</style>
