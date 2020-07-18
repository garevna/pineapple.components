# pineapple-components

All components are designed to be utilized in pineapple.net.au projects only.

They need the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install components
```
yarn add pineapple-styles
yarn add pineapple-system-bar
yarn add pineapple-main-nav-bar
yarn add pineapple-popup
yarn add pineapple-footer
yarn add pineapple-internet-plans
yarn add pineapple-how-to-connect
yarn add pineapple-testimonials
yarn add pineapple-faq
yarn add pineapple-contact-form
```

### Add the global styles and fonts to project

###### main.js
```
import 'pineapple-styles/css/fonts.scss'
import 'pineapple-styles/css/variables.scss'
```

###### App.vuex
```
import 'pineapple-styles'
```

### Load the components and their styles

App.vue
```
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

### Usage

You need the data object:

```
data () {
  return {
    page: null,
    plans: false,
    ready: false
  }
}
```

Then you should get the data from Vuex store:

```
computed: {
  ...mapState(['viewportWidth', 'mailEndpoint', 'emailSubject', 'emailText', 'mainContentHeight', 'footerHeight']),
  ...mapState('content', ['userForm', 'top'])
}
```

Besides you need the watcher for the `page` property:

```
watch: {
  page (val) {
    if (!val) return
    this.$vuetify.goTo(val, {
      duration: 500,
      offset: 0,
      easing: 'easeInOutCubic'
    })
    this.page = undefined
  }
}
```

###### container

All the components should be placed into container:

```
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

where `mutationHandler` should be defined in `methods`:

```
mutationHandler (mutations) {
  this.$store.commit('UPDATE_MAIN_CONTENT_HEIGHT', this.$el.offsetHeight)
  document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
}
```

where we use the `footerHeight` (mapped from the Vuex store) to calculate the page height

###### Footer

```
<v-row width="100%">
  <section id="footer" style="width: 100%">
    <div class="base-title">
      <a href="#footer" class="core-goto"></a>
      <Footer :page.sync="page" v-mutate="footerMutationHandler" />
    </div>
  </section>
</v-row>
```

The `footerMutationHandler` should be defined in `methods`, too:

```
footerMutationHandler (mutations) {
  const footer = document.querySelector('.footer')
  this.$store.commit('UPDATE_FOOTER_HEIGHT', footer.offsetHeight)
  document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
}
```

_______________________________

##### Other components

###### Top navigation
```
<SystemBar />
<MainNavBar :page.sync="page" />
```

###### UserContact

```
<section id="contact" class="section">
  <div class="base-title">
    <a href="#contact" class="core-goto"></a>
    <UserContact
          :userForm.sync="userForm"
          :emailSubject="emailSubject"
          :emailText="emailText"
          :emailEndpoint="mailEndpoint"
          v-if="userForm && userForm.fieldsToShow"
    />
  </div>
</section>
```

###### HowToConnect

```
<v-row width="100%" justify="center">
  <section id="how-to-connect" class="section">
    <div class="base-title">
      <a href="#how-to-connect" class="core-goto"></a>
      <HowToConnect :page.sync="page" />
    </div>
  </section>
</v-row>
```

###### InternetPlans

```
<v-row width="100%" justify="center">
  <section id="plans" class="section">
    <div class="base-title">
      <a href="#plans" class="core-goto"></a>
      <InternetPlans :page.sync="page" v-if="ready" />
    </div>
  </section>
</v-row>
```

###### Testimonials

```
<v-row width="100%" justify="center">
  <section id="testimonials" class="section">
    <div class="base-title">
      <a href="#testimonials" class="core-goto"></a>
      <Testimonials :page.sync="page"/>
    </div>
  </section>
</v-row>
```

###### FAQ

```
<v-row width="100%" justify="center">
  <section id="faq" class="section">
    <div class="base-title">
      <a href="#faq" class="core-goto"></a>
      <FAQ :page.sync="page"/>
    </div>
  </section>
</v-row>
```

Full example you can see in `App.vue` file
