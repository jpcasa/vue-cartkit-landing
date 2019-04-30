<template lang="html">
  <div class="ck-code-snippet">
    <pre><code class="language-js">{{ snippet }}</code></pre>
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
    }
  }
}
</script>

<style lang="scss"></style>
