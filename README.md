# pineapple-contact-form

This component is designed to be utilized in pineapple.net.au projects only.

It needs the data from vuex store and can't be used outside the pineapple.net.au and landing pages of pineapple.net.au

#### Warning:

This component uses **pineapple-popup** component

You should install it for the normal work of Contact Form:

```
yarn add pineapple-popup
```

and then import it in your app:
```
import pineapple-popup
```

____________________________________________

## install component
```
yarn add pineapple-contact-form
```

### Load the component and it's styles

App.vue
```
import 'pineapple-contact-form'
import 'pineapple-contact-form/dist/pineapple-contact-form.css'
```

### Use the component

```
<UserContact
    :userForm="userForm"
    :emailSubject="emailSubject"
    :emailText="emailText"
    :emailEndpoint="emailEndpoint"
/>
```

#### emailEndpoint

Backend API endpoint to send data from the form

_____________________________________________

## userForm
###### Fields of Form

For normal work this component waits for the **userForm** object

This object should contain such a props:

* title (string)
* button (string)
* fieldsToShow (array of objects)

**button** prop is the text that will be shown on the submit button face

#### fieldsToShow

is array of objects

Each object describes the form field
```
{
  placeholder: '...', /* String | required */
  type: '...', /* String | required! */
  required: false, /* Boolean */
  available: [...] /* Array of available values for the field | optional, for combo and list types only */
}
```

#### Field types

* text - simple text input field
* number - simple number input field
* email - input field with validation
* postcode - input field with validation of australian post codes
* state - selection field with validation of australian states
* phone - field with validation of australian phone numbers
* combo - input field with validation from the list of available values (_**available**_)
* list - selection field from the list of available values (_**available**_)
* message - textarea
