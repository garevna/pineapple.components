# pineapple-internet-plans

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install component
```
yarn add pineapple-internet-plans
```

### Load the component and it's styles

App.vue
```
import 'pineapple-internet-plans'
import 'pineapple-internet-plans/dist/pineapple-internet-plans.css'
```

### Use the component

```
<InternetPlans :page.sync="page" />
```

_____________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-internet-plans/css/fonts.scss'
import 'pineapple-internet-plans/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-internet-plans/css/main.css'
```
