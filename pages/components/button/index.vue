<template lang="html">
  <!-- eslint-disable -->
  <section class="page component-docs">
    <no-ssr>

      <div class="docs-section">
        <h1>Button</h1>
        <p>Amazing and easy-to-use button components.</p>
      </div>

      <div class="docs-section">
        <h3>Component Registration</h3>
        <CodeSnippet :snippet="buttonImportSnippet" />
      </div>

      <!-- Button Types -->
      <div class="docs-section">
        <h3>Button Examples</h3>
        <CodeCard
          class="button-types"
          footer-title="Button Types"
          footer-copy="Amazing and easy-to-use button components."
          :footer-snippet="buttonsSnippet"
        >
          <ck-button>Default</ck-button>
          <ck-button type="primary">Primary</ck-button>
          <ck-button type="dashed">Dashed</ck-button>
          <ck-button type="danger">Danger</ck-button>
          <ck-button type="cancel">Cancel</ck-button>
        </CodeCard>
      </div>

      <!-- Button Groups -->
      <div class="docs-section">
        <h3>Button Groups</h3>
        <CodeCard
          footer-title="Button Groups"
          footer-copy="Amazing and easy-to-use button group components."
          :footer-snippet="buttonGroupSnippet"
        >
          <div class="mb-6">
            <p class="mb-3 text-sm">With Active Attribute</p>
            <ck-button-group>
              <ck-button
                :active="buttonGroup1 == 'Left'"
                @clicked="changeButtonGroup1('Left')"
              >
                Left
              </ck-button>
              <ck-button
                :active="buttonGroup1 == 'Center'"
                @clicked="changeButtonGroup1('Center')"
              >
                Center
              </ck-button>
              <ck-button
                :active="buttonGroup1 == 'Right'"
                @clicked="changeButtonGroup1('Right')"
              >
                Right
              </ck-button>
            </ck-button-group>
          </div>
          <div>
            <p class="mb-3 text-sm">With Primary Type</p>
            <ck-button-group>
              <ck-button
                :type="buttonGroup2 == 'Left' ? 'primary' : 'default'"
                @clicked="changeButtonGroup2('Left')"
              >
                Left
              </ck-button>
              <ck-button
                :type="buttonGroup2 == 'Center' ? 'primary' : 'default'"
                @clicked="changeButtonGroup2('Center')"
              >
                Center
              </ck-button>
              <ck-button
                :type="buttonGroup2 == 'Right' ? 'primary' : 'default'"
                @clicked="changeButtonGroup2('Right')"
              >
                Right
              </ck-button>
            </ck-button-group>
          </div>
        </CodeCard>
      </div>

      <!-- More Buttons -->
      <div class="docs-section">
        <h3>Other Button Types</h3>
        <CodeCard
          class="button-types"
          footer-title="Other Button types"
          footer-copy="Other Button types for your projects."
          :footer-snippet="buttonOthersSnippet"
        >
          <div class="mb-6">
            <p class="mb-3 text-sm">With Icon</p>
            <ck-button icon="icon-cog">Default</ck-button>
            <ck-button icon="icon-paint-tool" type="primary">Primary</ck-button>
          </div>
          <div class="mb-6">
            <p class="mb-3 text-sm">Different Sizes</p>
            <ck-button size="small">Small</ck-button>
            <ck-button size="medium">Default</ck-button>
            <ck-button size="large">Large</ck-button>
          </div>
          <div>
            <p class="mb-3 text-sm">Disabled</p>
            <ck-button type="disabled">Disabled</ck-button>
          </div>
        </CodeCard>
      </div>

    </no-ssr>
  </section>
  <!-- eslint-enable -->
</template>

<script>
import CodeSnippet from '~/components/DataDisplay/CodeSnippet'
import CodeCard from '~/components/DataDisplay/CodeCard'

import {
  buttonGroupSnippet,
  buttonsSnippet,
  buttonOthersSnippet,
  buttonImportSnippet
} from '~/utils/snippets/buttons'

export default {
  layout: 'docs',
  components: {
    CodeSnippet,
    CodeCard
  },
  data() {
    return {
      buttonCode: false,
      buttonGroup1: 'Left',
      buttonGroup2: 'Left',
      buttonGroupSnippet,
      buttonsSnippet,
      buttonOthersSnippet,
      buttonImportSnippet
    }
  },
  methods: {
    changeButtonGroup1(key) {
      this.buttonGroup1 = key
    },
    changeButtonGroup2(key) {
      this.buttonGroup2 = key
    }
  }
}
</script>

<style lang="css" scoped></style>
