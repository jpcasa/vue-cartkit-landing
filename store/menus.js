export const state = () => ({
  mainMenu: [
    {
      title: 'Installation',
      items: [
        {
          title: 'Getting Started',
          link: '/install/getting-started'
        },
        {
          title: 'Installing',
          link: '/install/installing'
        },
        {
          title: 'FAQs',
          link: '/install/faqs'
        },
        {
          title: 'Contribute',
          link: '/install/contribute'
        },
        {
          title: 'Become Sponsor',
          link: '/install/become-sponsor'
        }
      ]
    },
    {
      title: 'Components',
      items: [
        {
          title: 'General',
          link: '',
          subItems: [
            {
              title: 'Button',
              link: '/components/button'
            },
            {
              title: 'Button Icon',
              link: '/components/button-icon'
            },
            {
              title: 'Icons',
              link: '/components/icons'
            }
          ]
        },
        {
          title: 'Layout',
          link: '',
          subItems: [
            {
              title: 'Row',
              link: '/components/row'
            },
            {
              title: 'Grid',
              link: '/components/grid'
            },
            {
              title: 'Side Menu',
              link: '/components/side-menu'
            }
          ]
        }
      ]
    }
  ]
})
