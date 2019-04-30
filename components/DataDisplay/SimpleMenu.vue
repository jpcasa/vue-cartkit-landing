<template lang="html">
  <!-- eslint-disable -->
  <div class="ck-simple-menu">

    <!-- MENU ITEMS -->
    <div v-for="(item, i) in menu" :key="i" class="menu-item">

      <!-- MAIN TITLE -->
      <h3>
        <nuxt-link
          v-if="item.link"
          :to="item.link"
          @click.native="clickedLink(item.link)"
        >
          {{ item.title }}
        </nuxt-link>
        <span v-if="!item.link">
          {{ item.title }}
        </span>
      </h3>

      <!-- MAIN ITEMS -->
      <ul class="sub-menu">
        <li v-for="(subItem, j) in item.items" :key="j" class="sub-menu-item">
          <nuxt-link
            v-if="subItem.link"
            :to="subItem.link"
            class="sub-menu-link"
            @click.native="clickedLink(subItem.link)"
          >
            {{ subItem.title }}
          </nuxt-link>
          <span v-if="!subItem.link" class="sub-menu-title">
            {{ subItem.title }}
          </span>

          <!-- SECONDARY ITEMS -->
          <ul v-if="subItem.subItems" class="secondary-menu">
            <li
              v-for="(secondaryItem, k) in subItem.subItems"
              :key="k"
              class="secondary-menu-item"
            >
              <nuxt-link
                v-if="secondaryItem.link"
                :to="secondaryItem.link"
                class="secondary-menu-link"
                @click.native="clickedLink(secondaryItem.link)"
              >
                {{ secondaryItem.title }}
              </nuxt-link>
              <span v-if="!secondaryItem.link">
                {{ secondaryItem.title }}
              </span>
            </li>
          </ul>
          <!-- END SECONDARY ITEMS -->

        </li>
      </ul>
      <!-- END MAIN ITEMS -->

    </div>
    <!-- END MENU ITEMS -->

  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    active: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      activeLink: this.active
    }
  },
  methods: {
    clickedLink(link) {
      this.$emit('clicked', link)
      this.activeLink = link
    }
  }
}
</script>

<style lang="scss" scoped>
.ck-simple-menu {
  .menu-item {
    @apply mb-8;

    h3 {
      @apply mb-4;
    }

    .sub-menu {
      @apply list-reset;

      .sub-menu-item {
        @apply mb-2;

        .sub-menu-link {
          @apply block;
        }

        &:hover {
          .sub-menu-link {
            @apply text-blue;
            border-right: 4px solid $color-blue;
          }
        }

        .sub-menu-link.nuxt-link-exact-active {
          @apply text-blue;
          border-right: 4px solid $color-blue;
        }

        .sub-menu-title {
          font-family: $font-circular-medium;
          @apply text-grey-darkest mb-3 block;
        }

        .secondary-menu {
          @apply list-reset;

          .secondary-menu-item {
            @apply mb-2 pl-4 block;

            .secondary-menu-link {
              @apply block;
            }

            &:hover {
              .secondary-menu-link {
                @apply text-blue;
                border-right: 4px solid $color-blue;
              }
            }

            .secondary-menu-link.nuxt-link-exact-active {
              @apply text-blue;
              border-right: 4px solid $color-blue;
            }
          }
        }
      }
    }
  }
}
</style>
