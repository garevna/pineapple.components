# pineapple-faq

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

## install component
```
yarn add pineapple-faq
```

### Load the component and it's styles

App.vue
```
import 'pineapple-faq'
import 'pineapple-faq/dist/pineapple-faq.css'
```

### iconify

In order to avoid loading all Material Design Icons and associated fonts, we use **iconify**

First of all we need to install this package:
```
yarn add @iconify/iconify
```

Then we should add this import into App.js:
```
import '@iconify/iconify'
```

### Use the component

```
<FAQ />
```

## Data

### Store

#### Module

FAQ's souce data should be stored module **content** of vuex store

#### State

in **_faq_** section of state

### Structure

###### Example

```
faq: {
  header:'We’ve Answered Some Common Questions',
  button: 'Get in Touch',
  goto: '#contact',
  items: [
    {
      question: 'Text of question here...',
      answer: 'Some text of answer here...'
    },
    {
      question: 'Text of question here...',
      answer: 'Some text of answer here...'
    },
    ...
  ]
}
```

_____________________________

#### Styles and fonts

You should install the fonts and variables:

###### main.js
```
import 'pineapple-styles/css/fonts.scss'
import 'pineapple-styles/css/variables.scss'
```

and then install global styles:

###### App.vue
```
import 'pineapple-styles'
```
