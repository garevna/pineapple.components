# pineapple-footer

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

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
<Footer />
```

### Add the global styles and fonts to project

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-footer/css/fonts.scss'
import 'pineapple-footer/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-footer/css/main.css'
```
