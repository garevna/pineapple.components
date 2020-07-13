# pineapple-testimonials

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install component
```
yarn add pineapple-testimonials
```

### Load the component and it's styles

App.vue
```
import 'pineapple-testimonials'
import 'pineapple-testimonials/dist/pineapple-testimonials.css'
```

### Use the component

```
<Testimonials :page.sync="page" />
```

_____________________________________

#### Warning

This component needs the styles of pineapple.net.au

```
yarn add pineapple-styles
```

###### main.js
```
import 'pineapple-styles/css/fonts.scss'
import 'pineapple-styles/css/variables.scss'
```

###### App.js
```
import 'pineapple-styles'
```
