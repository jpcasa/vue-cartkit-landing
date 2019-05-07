export const buttonImportSnippet = `import { ck-button } from 'vue-cartkit'

Vue.use(ck-button)
`

export const buttonsSnippet = `<template>
  <div>
    <ck-button>Default</ck-button>
    <ck-button type="primary">Primary</ck-button>
    <ck-button type="dashed">Dashed</ck-button>
    <ck-button type="danger">Danger</ck-button>
    <ck-button type="cancel">Cancel</ck-button>
  </div>
</template>
`

export const buttonGroupSnippet = `<template lang="html">
  <div>
    <!-- With Active Attributes -->
    <ck-button-group>
      <ck-button
        :active="buttonActive1 == 'Left'"
        @clicked="activateButton1('Left')"
        >
        Left
      </ck-button>
      <ck-button
        :active="buttonActive1 == 'Center'"
        @clicked="activateButton1('Center')"
        >
        Center
      </ck-button>
      <ck-button
        :active="buttonActive1 == 'Right'"
        @clicked="activateButton1('Right')"
        >
        Right
      </ck-button>
    </ck-button-group>

    <!-- With Primary Type -->
    <ck-button-group>
      <ck-button
        :type="buttonActive2 == 'Left' ? 'primary' : 'default'"
        @clicked="activateButton2('Left')"
      >
        Left
      </ck-button>
      <ck-button
        :type="buttonActive2 == 'Center' ? 'primary' : 'default'"
        @clicked="activateButton2('Center')"
      >
        Center
      </ck-button>
      <ck-button
        :type="buttonActive2 == 'Right' ? 'primary' : 'default'"
        @clicked="activateButton2('Right')"
      >
        Right
      </ck-button>
    </ck-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonActive1: 'Left',
      buttonActive2: 'Left'
    }
  },
  methods: {
    activateButton1(key) {
      this.buttonActive1 = key
    },
    activateButton2(key) {
      this.buttonActive2 = key
    }
  }
}
</script>
`

export const buttonOthersSnippet = `<template lang="html">
  <div>
    <!-- Buttons With Icons -->
    <ck-button icon="icon-cog">
      Default
    </ck-button>
    <ck-button icon="icon-paint-tool" type="primary">
      Primary
    </ck-button>

    <!-- Buttons Sizes -->
    <ck-button size="small">Small</ck-button>
    <ck-button size="medium">Default</ck-button>
    <ck-button size="large">Large</ck-button>

    <!-- Buttons Disabled -->
    <ck-button type="disabled">Disabled</ck-button>
  </div>
</template>
`
