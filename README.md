# pineapple-contact-form

<sup>This component is designed to be utilized in pineapple.net.au projects only.<br>
It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of **pineapple.net.au**</sup>

## Install the component

```
yarn add pineapple-contact-form
```
> Warning: This component use the global component **pineapple-popup**

#### Add with <script> tag
###### (Not recommended)
```
<script src="https://registry.npmjs.org/pineapple-contact-form"></script>
```

## Import the component and it's styles

###### It'll be the global component UserContact

```
import 'pineapple-contact-form'
import 'pineapple-contact-form/dist/pineapple-contact-form.css'
```

### Node.js

```
const ContactForm = require('pineapple-contact-form')
const ContactFormStyles = require('pineapple-contact-form/dist/pineapple-contact-form.css')
```

## Usage

```
<UserContact :userForm="userForm" />
```

where **userForm** should be the object with the next set of fields:

* **_title_** (string)
* **_button_** (string)
* **_fieldsToShow_** (array of objects)

**_title_**  contains the text which will be shown at the top of form<br>
**_button_** contains the text which will be shown on the button face<br>
**_fieldsToShow_** is the array containing the object that describe the fields of user form

#### Fields

##### Types

Each field of the form can be one of the types:

* **text** (plain text without validation)
* **email** (email)
* **phone** (australian phone number)
* **list** (selection field with the list of values)
* **combo** (input field with the list of available values)
* **number** (input field for digits only)
* **message** (textarea)

##### Required and placeholder

If you want the field to be required set it's property **_required_** to `true`

You should set the value of property **_placeholder_** because the fields have no labels

##### Example:
```
userForm: {
   title: 'Ask Questions Or Get Connected Today',
   button: 'Get Connected',
   fieldsToShow: [
     {
       type: 'text',
       placeholder: 'Full name*',
       required: true
     },
     {
       type: 'email',
       placeholder: 'Email*',
       required: true
     },
     {
       type: 'phone',
       placeholder: 'Phone',
       required: false
     },
     {
       type: 'list',
       placeholder: 'Building*',
       available: ['Aurora', 'QV1', 'Conservatory'],
       value: 'Conservatory',
       required: true
     },
     {
       type: 'number',
       placeholder: 'Appt number*',
       required: true
     },
     {
       type: 'combo',
       placeholder: 'Promocode',
       available: ['FREEINTERNETAURORA', 'FREEINTERNETCONSERVATORY', 'FREEINTERNETQV1'],
       required: false
     },
     {
       type: 'message',
       placeholder: 'Enquiry',
       required: true
     }
  ]
}
```
________________________

#### You can add the global styles and fonts to the project from this package

You can install the fonts and variables of pineapple.net.au projects so:

###### main.js
```
import 'pineapple-contact-form/css/fonts.scss'
import 'pineapple-contact-form/css/variables.scss'
```

You can install global styles of pineapple.net.au projects so:

###### App.vue
```
import 'pineapple-contact-form/css/main.css'
```
