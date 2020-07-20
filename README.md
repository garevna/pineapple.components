# pineapple-footer

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

**Warning**

Component needs **_pineapple-popup_** and **_pineapple-styles_** packages

You should install them:

```
yarn add pineapple-styles
yarn add pineapple-popup
```

and then import in your **App.vue** file:

```
import 'pineapple-styles'
import 'pineapple-popup'
```

Besides you should import two files in your **main.js**:

```
import 'pineapple-styles/css/fonts.scss'
import 'pineapple-styles/css/variables.scss'
```

## install component
```
yarn add pineapple-footer
```

### Load the component and it's styles

App.vue
```
import Footer from 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'
```

### Use the component

```
<Footer :emailEndpoint="emailEndpoint" />
```

#### Requirements

##### store/index.js

In the main vuex store file (`index.js`) you should add the _mutation_:

```
UPDATE_FOOTER_HEIGHT: (state, payload) => { state.footerHeight = payload }
```
and the property `footerHeight` to the state object

##### App.vue

First of all you should add the propery `mainContentHeight` to the data object

Then in **App.vue** _computed_ property add the mapping of `footerHeight`:

```
...mapState(['viewportWidth', 'browserTabTitle', 'mailEndpoint', 'emailSubject', 'emailText', 'footerHeight'])
```

Then add the `mutationHandler` to the _methods_:
```
mutationHandler (mutations) {
  this.mainContentHeight = this.$el.offsetHeight
}
```
and modify the event handler `onResize` width one line of code:
```
onResize () {
  this.$store.commit('CHANGE_VIEWPORT')
  document.body.style.height = this.mainContentHeight + this.footerHeight + 'px'
}
```

Now you need the watchers:

```
watch: {
  mainContentHeight (val) {
    document.body.style.height = val + this.footerHeight + 'px'
  },
  footerHeight (val) {
    document.body.style.height = this.mainContentHeight + val + 'px'
  }
}
```

<sup>Full example you can see on the landing pages</sup>
