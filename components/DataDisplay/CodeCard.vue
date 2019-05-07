<template lang="html">
  <!-- eslint-disable -->
  <div class="cartkit-code-card">
    <Card class="docs-card" :footer-title="footerTitle" footer>
      <div class="docs-card-content">
        <slot></slot>
      </div>
      <template v-slot:footer>
        <div class="card-footer flex items-center">
          <div class="flex-auto">
            <p class="text-sm">{{ footerCopy }}</p>
          </div>
          <div class="flex-none">
            <i
              :class="`icon ${showCode ? 'icon-times' : 'icon-code'}`"
              @click="showCode = !showCode"
            />
          </div>
        </div>
        <transition name="slide">
          <div v-if="showCode">
            <CodeSnippet
              :snippet="footerSnippet"
              lang="html"
              class="footer-code"
            />
          </div>
        </transition>
      </template>
    </Card>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import CodeSnippet from '~/components/DataDisplay/CodeSnippet'
import Card from '~/components/DataDisplay/Card'

export default {
  components: {
    CodeSnippet,
    Card
  },
  props: {
    footerTitle: {
      type: String,
      default: () => {
        return ''
      }
    },
    footerCopy: {
      type: String,
      default: () => {
        return ''
      }
    },
    footerSnippet: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
