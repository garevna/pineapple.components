# pineapple-how-to-connect

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install component
```
yarn add pineapple-how-to-connect
```

### Load the component and it's styles

App.vue
```
import 'pineapple-how-to-connect'
import 'pineapple-how-to-connect/dist/pineapple-how-to-connect.css'
```

### Use the component

```
<HowToConnect :page.sync="page" />
```

_____________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-how-to-connect/css/fonts.scss'
import 'pineapple-how-to-connect/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-how-to-connect/css/main.css'
```
