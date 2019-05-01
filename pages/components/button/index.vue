<template lang="html">
  <!-- eslint-disable -->
  <section class="page component-docs">

    <div class="docs-section">
      <h1>Button</h1>
      <p>Amazing and easy-to-use button components.</p>
    </div>

    <div class="docs-section">
      <h3>Component Registration</h3>
      <CodeSnippet snippet="import { Button } from 'vue-cartkit'

Vue.use(Button)" />
    </div>

    <div class="docs-section">
      <h3>Button Examples</h3>
      <Card class="docs-card" title="algo" tooltip="algo mas" footer>
        algo
        <template v-slot:footer>
          <div class="card-footer flex">
            <div class="flex-auto">
              <p>Amazing and easy-to-use button components.</p>
            </div>
            <div class="flex-none">
              <i
                :class="`icon ${buttonCode ? 'icon-times' : 'icon-code'}`" 
                @click="buttonCode = !buttonCode"
              />
            </div>
          </div>
          <transition name="slide">
            <div v-if="buttonCode">
              <CodeSnippet
                snippet="import { Button } from 'vue-cartkit'"
                class="footer-code"
              />
            </div>
          </transition>
        </template>
      </Card>
    </div>

  </section>
  <!-- eslint-enable -->
</template>

<script>
import CodeSnippet from '~/components/DataDisplay/CodeSnippet'
import Card from '~/components/DataDisplay/Card'

export default {
  layout: 'docs',
  components: {
    CodeSnippet,
    Card
  },
  data() {
    return {
      buttonCode: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
