<template lang="html">
  <div class="ck-code-snippet">
    <pre><code :class="`language-${lang}`">{{ snippet }}</code></pre>
    <div class="copy" @click="doCopy()">
      <span>copy</span>
      <transition name="fade">
        <div v-if="overlay" class="overlay">
          <p>Snippet copied!</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    snippet: {
      type: String,
      default: () => {
        return ''
      }
    },
    lang: {
      type: String,
      default: () => {
        return 'js'
      }
    }
  },
  data() {
    return {
      overlay: false
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.snippet).then(
        e => {
          this.overlay = true
          setTimeout(() => (this.overlay = false), 1500)
        },
        e => {
          alert('Can not copy')
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-code-snippet {
  @apply relative;

  code,
  pre {
    @apply text-xs;
  }

  .copy {
    @apply absolute pin-t pin-r bg-blue text-white text-xs py-1 px-2 rounded-tr-lg;
    @apply cursor-pointer;

    .overlay {
      top: -1.6rem;
      left: -3.4rem;
      @apply rounded absolute bg-white shadow-lg w-24 text-grey-dark text-center py-1;
    }

    &:hover {
      @apply bg-blue-dark;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
