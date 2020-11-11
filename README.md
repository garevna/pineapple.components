# pineapple-components

All components are designed to be utilized in **pineapple.net.au** projects only.

Each component placed on it's own branch.

They need the data from `vuex` store and can't be used outside the **pineapple.net.au** projects.

## install components

Each component has been published to npm registry

```
$ yarn add pineapple-styles
$ yarn add pineapple-system-bar
$ yarn add pineapple-main-nav-bar
$ yarn add pineapple-popup
$ yarn add pineapple-footer
$ yarn add pineapple-internet-plans
$ yarn add pineapple-how-to-connect
$ yarn add pineapple-testimonials
$ yarn add pineapple-faq
$ yarn add pineapple-contact-form
```

### Add the global styles and fonts to project

###### main.js
```js
import 'pineapple-styles/css/fonts.scss'
import 'pineapple-styles/css/variables.scss'
```

###### App.vuex
```js
import 'pineapple-styles'
```

### Load the components and their styles

#### SPA

App.vue

```js
/* SystemBar */
import 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'

/* MainNavBar */
import 'pineapple-main-nav-bar'
import 'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css'

/* HowToConnect */
import 'pineapple-how-to-connect'
import 'pineapple-how-to-connect/dist/pineapple-how-to-connect.css'

/* Testimonials */
import 'pineapple-testimonials'
import 'pineapple-testimonials/dist/pineapple-testimonials.css'

/* InternetPlans */
import 'pineapple-internet-plans'
import 'pineapple-internet-plans/dist/pineapple-internet-plans.css'

/* Popup */
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

/* UserContact */
import 'pineapple-contact-form'
import 'pineapple-contact-form/dist/pineapple-contact-form.css'

/* FAQ */
import 'pineapple-faq'
import 'pineapple-faq/dist/pineapple-faq.css'

/* Footer */
import 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'
```

#### Nuxt (SSR)

##### nuxt.config.js

For server rendering, styles should be included to the file  **nuxt.config.js**:

```js
module.exports = {
  ssr: true,
  ...
  css: [
    'pineapple-styles/css/fonts.scss',
    'pineapple-styles/css/variables.scss',
    'pineapple-styles/dist/main.css',
    'pineapple-system-bar/dist/pineapple-system-bar.css',
    'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css',
    'pineapple-popup/dist/pineapple-popup.css',
    'pineapple-footer/dist/pineapple-footer.css',
    'pineapple-faq/dist/pineapple-faq.css',
    'pineapple-internet-plans/dist/pineapple-internet-plans.css',
    'pineapple-testimonials/dist/pineapple-testimonials.css',
    'pineapple-how-to-connect/dist/pineapple-how-to-connect.css',
    'pineapple-contact-form/dist/pineapple-contact-form.css'
  ],
  ...
}
```

[example](https://github.com/garevna/nuxt-app/blob/heroku/nuxt.config.js)

______________________________________________________

### Usage

#### Component' props and parent data

Each component has a button to navigate within the page

When user clicks the button, the component returns the link value (for example, `#testimonials`) through a props `goto` using the `sync` modifier

```html
<v-row ref="testimonials" justify="center">
  <Testimonials :goto.sync="goto" />
</v-row>
```

And that is the reason we need the watcher for the `goto` property:

```js
watch: {
  goto (val) {
    if (!val || !process.client) { return }
    const elem = this.$refs[val.slice(1)]
    if (!elem || elem.nodeType !== 1) { return }
    elem.scrollIntoView({ behavior: 'smooth' })
    this.goto = undefined
  }
}
```

<small>remember that you need **_goto_** variable in the `data` object</small>

#### Components container

All the components should be placed into container:

```html
<v-container
      fluid
      fill-height
      class="homefone"
      v-if="ready"
      v-mutate="mutationHandler"
>
  ...
</v-container>
```

or (Nuxt layout):

```html
<v-app>
  <SystemBar />
  <Nuxt v-mutate="mutationHandler" />
  <section
    id="pineapple-footer"
    v-mutate="footerMutationHandler"
  >
    <Footer
      :email-endpoint="mailEndpoint"
    />
  </section>
</v-app>
```


where `mutationHandler` should be defined in `methods`:

```
mutationHandler (mutations) {
  this.$store.commit('UPDATE_MAIN_CONTENT_HEIGHT', this.$el.offsetHeight)
  document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
}
```

where we use the `footerHeight` (mapped from the Vuex store) to calculate the page height

The `footerMutationHandler` should be defined in `methods`, too:

```
footerMutationHandler (mutations) {
  const footer = document.querySelector('.footer')
  this.$store.commit('UPDATE_FOOTER_HEIGHT', footer.offsetHeight)
  document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
}
```

[Nuxt (SSR) layout example](https://github.com/garevna/nuxt-app/blob/heroku/layouts/default.vue)

_______________________________

##### Other components

[examples](https://github.com/garevna/nuxt-app/blob/heroku/pages/index.vue)
