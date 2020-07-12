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
