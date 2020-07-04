# pineapple-testimonials

<sup>This component is designed to be utilized in pineapple.net.au projects only.<br>

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au</sup>

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

### Using <script> tag

```
<script src="https://registry.npmjs.org/pineapple-testimonials"></script>
```

## Usage

```
<Testimonials :content="reviews" :page.sync="goto"/>
```

where *reviews* should be the object with two properties:

• *reviews.header* (before)

• *reviews.button* (after)

> If the property *reviews.button* is absent the button will not be shown

> If the property *reviews.button* is present the value of *goto* should point the section on the page where to scroll to

________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-testimonials/css/fonts.scss'
import 'pineapple-testimonials/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-testimonials/css/main.css'
```
