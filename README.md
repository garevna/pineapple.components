# pineapple-popup

<sup>This component is designed to be utilized in pineapple.net.au projects only.<br>
It should not be used outside the pineapple.net.au and landing pages of **pineapple.net.au**</sup>

## Install the component

```
yarn add pineapple-popup
```

#### Add with <script> tag
###### (Not recommended)
```
<script src="https://registry.npmjs.org/pineapple-popup"></script>
```

## Import the component and it's styles

###### It'll be the global component Popup

```
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'
```

### Node.js

```
const Popup = require('pineapple-popup')
const PopupStyles = require('pineapple-popup/dist/pineapple-popup.css')
```

## iconify

In order to avoid loading all Material Design Icons and associated fonts, we use **iconify**

First of all we need to install this package:

```
yarn add @iconify/iconify
```

Then we should add this `import` into App.js:
```
import '@iconify/iconify'
```

## Usage

###### Success (form has been submitted)
```
<Popup type="success" :opened="popupOpened" />
```
###### Error (contact form error)
```
<Popup type="error" :opened="popupOpened" />
```
###### Disabled (contact form submission is disabled)
```
<Popup type="disabled" :opened="popupOpened" />
```
###### Any other message

You can send any info to component `Popup`:
```
<Popup
  :title="title"
  :text="text"
  :color="color"
  :opened="popupOpened"
/>
```
