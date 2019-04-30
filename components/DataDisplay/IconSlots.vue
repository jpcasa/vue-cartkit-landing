<template lang="html">
  <div class="ck-icon-slots">
    <a
      v-for="(item, i) in chosenItems"
      :key="i"
      :href="item.link"
      target="_blank"
      class="slot"
    >
      <img :src="item.img" />
    </a>
    <nuxt-link
      v-for="j in (0, emptyItems)"
      :key="j"
      :to="link"
      class="slot-empty"
    >
      <i class="icon-plus" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    chosenItems: {
      type: Array,
      default: () => {
        return []
      }
    },
    emptyItems: {
      type: Number,
      default: () => {
        return 0
      }
    },
    link: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-icon-slots {
  @apply flex justify-between;

  .slot {
    transition: 0.5s all;
    @apply rounded-lg overflow-hidden w-14 h-14;

    &:hover {
      @apply opacity-75;
    }

    img {
      @apply h-full w-auto;
    }
  }

  .slot-empty {
    transition: 0.5s all;
    @apply rounded-lg w-14 h-14 border border-dashed border-grey flex;
    @apply items-center justify-center cursor-pointer;

    &:hover {
      @apply border-blue text-blue bg-blue-lighter;
    }

    a {
      @apply text-grey-dark;

      i {
        @apply text-xl text-grey-dark;
      }
    }
  }
}
</style>
