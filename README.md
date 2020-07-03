# pineapple-system-bar

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install component
```
yarn add pineapple-system-bar
```

### Load the component and it's styles

App.vue
```
import SystemBar from 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'
```

### Use

```
<SystemBar />
```

________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-system-bar/css/fonts.scss'
import 'pineapple-system-bar/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-system-bar/css/main.css'
```
