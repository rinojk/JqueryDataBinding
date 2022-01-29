# JqueryDataBinding

Simple implementation of one-way binding from view to model using JS and Jquery

To use it, define any global variable (`state`, for example) in your `*.js` file, pass it to the StateManager constructor as a parameter and then add `model-bind=""` attribute to your input tags.

Example:

>Value from this input `<input type='text' model-bind='unicorn.name'</input>` will be stored to `state.unicorn.name`

Important: *this is an early test version of the script, use at your own risk!*

Index page template: *[link](https://bbbootstrap.com/snippets/tailwind-css-checkout-form-template-48654569)*
