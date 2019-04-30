<template lang="html">
  <!-- eslint-disable -->
  <div class="page">
    <h1 class="page-title">Getting Started</h1>
    <p>
      Vue Cartkit is designed to speed up and make development easier for
      frontend developers.
    </p>

    <div class="import mt-10">
      <h3 class="page-subtitle">Using Vue CLI 3</h3>
      <p class="page-subtitle">1. Install Vue</p>
      <CodeSnippet snippet="$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli" />
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import CodeSnippet from '~/components/DataDisplay/CodeSnippet'

export default {
  layout: 'docs',
  components: {
    CodeSnippet
  }
}
</script>

<style lang="scss" scoped></style>
