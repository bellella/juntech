import { configure, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // Available Rules에서 제공하는 모든 rule, 추천하지 않는 방식
import { messages } from 'vee-validate/dist/locale/ko.json'
import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.component('VeeObs', ValidationObserver);
Vue.component('VeePro', ValidationProvider);

// rules setting
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

// config setting
const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
};
configure(config);
// import Vue from 'vue';
// import { Form, Field, ErrorMessage } from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';

// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);

// Vue.component('Form', Form);
// Vue.component('Field', Field);
// Vue.component('ErrorMessage', ErrorMessage);

// Object.keys(rules).forEach((rule) => {
//   extend(rule, rules[rule]);
// });