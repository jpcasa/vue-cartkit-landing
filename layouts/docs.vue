<template lang="html">
  <!-- eslint-disable -->
  <div class="layout-docs">

    <!-- SIDEBAR -->
    <Sidebar :visible="sidebar" full class="z-50">
      <div class="sidebar-content">
        <h1>
          <nuxt-link to="/" @click.native="mainClick('/')">
            Vue <span class="text-blue">Carkit</span>
          </nuxt-link>
        </h1>

        <!-- SPONSORS -->
        <div class="sponsors pr-6">
          <p class="title">Sponsors</p>
          <IconSlots
            :chosen-items="chosenItems"
            :empty-items="2"
            link="/become-sponsor"
          />
        </div>

        <!-- MAIN MENU -->
        <div class="main-menu">
          <SimpleMenu
            ref="simpleMenu"
            :menu="mainMenu"
            :active="menuActive"
            @clicked="activateMenu"
          />
        </div>
      </div>
    </Sidebar>

    <Topbar :class="sidebar ? 'top-bar' : 'top-bar-full'">
      <div class="top-bar-content">
        <div class="icons">
          <i
            :class="sidebar ? 'icon-left-indent' : 'icon-align'"
            @click="sidebar = !sidebar"
          />
        </div>
        <div class="menu text-right">
          <nuxt-link
            to="/"
            @click.native="activateMenu('/')"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/components/button"
            @click.native="activateMenu('/components/button')"
          >
            Components
          </nuxt-link>
        </div>
        <div class="options">
          <Dropdown>
            <Button icon="icon-angle-down">
              v1.2.12
            </Button>
            <template v-slot:overlay>
              <div class="version">
                <nuxt-link to="/">v1.2.12</nuxt-link>
              </div>
            </template>
          </Dropdown>
          <Button type="primary" class="ml-3">Support Us</Button>
        </div>
      </div>
    </Topbar>

    <!-- MAIN CONTENT -->
    <div :class="`layout-content ${sidebar ? '' : 'content-full'}`">
      <nuxt />
    </div>

  </div>
  <!-- eslint-enable -->
</template>

<script>
import { mapState } from 'vuex'

import Sidebar from '~/components/Layout/Sidebar'
import Topbar from '~/components/Layout/Topbar'
import IconSlots from '~/components/DataDisplay/IconSlots'
import SimpleMenu from '~/components/DataDisplay/SimpleMenu'
import Button from '~/components/General/Button'
import Dropdown from '~/components/Navigation/Dropdown'

export default {
  name: 'Docs',
  components: {
    Sidebar,
    Topbar,
    IconSlots,
    SimpleMenu,
    Button,
    Dropdown
  },
  data() {
    return {
      sidebar: true,
      menuActive: '/',
      chosenItems: [
        {
          key: 'cc',
          tooltip: 'Consistent Cart',
          img: '/img/2x/cc-logo@2x.png',
          link: 'https://apps.shopify.com/consistent-cart'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      mainMenu: state => state.menus.mainMenu
    })
  },
  mounted() {
    this.activateMenu(this.$nuxt.$route.path)
    this.mainClick(this.$nuxt.$route.path)
  },
  methods: {
    activateMenu(link) {
      this.menuActive = link
    },
    mainClick(link) {
      this.$refs.simpleMenu.clickedLink(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  width: calc(100% - 15rem);
  @apply fixed pin-t pin-r h-screen overflow-y-scroll z-10 mt-16;
}

.content-full {
  @apply w-full;
}

.layout-docs {
  .sidebar-content {
    @apply pl-6 py-6;

    h1 {
      @apply text-xl mb-6;
    }

    .sponsors {
      @apply mb-8;

      .title {
        @apply mb-3;
      }
    }
  }
}

.top-bar {
  width: calc(100% - 15rem);
}

.top-bar-full {
  @apply w-full;
}

.top-bar-content {
  @apply flex items-center h-full px-6;

  .icons,
  .options {
    @apply flex-none;
  }

  .menu {
    border-right-width: 1px;
    @apply pr-4 mr-6 flex-auto h-full inline-flex items-center justify-end border-grey-light border-solid;

    a {
      @apply inline-block px-3;
    }

    a.nuxt-link-exact-active {
      @apply text-blue;
    }
  }

  .icons {
    i {
      @apply text-2xl cursor-pointer;

      &:hover {
        @apply text-blue;
      }
    }
  }

  .options {
    .version {
      a {
        @apply block py-1;
      }
    }
  }
}
</style>
