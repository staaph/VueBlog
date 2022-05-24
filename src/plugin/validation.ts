import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
} from 'vee-validate';
import { required, min, max, confirmed, email } from '@vee-validate/rules';
import type { App } from 'vue';

export default {
  install(app: App) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('tos', required);
    defineRule('passwords_mismatch', confirmed);
    defineRule('email', email);
    defineRule('confirm_password', required);

    configure({
      generateMessage: (ctx: any) => {
        const messages: {[index: string]:string} = {
          required: `Please fill out this field`,
          min: `${ctx.field} must have min 8 characters`,
          max: `${ctx.field} is too long.`,
          alpha_spaces: `${ctx.field} may only contain alphabetic characters and spaces`,
          email: `email is invalid`,
          min_value: `${ctx.field} is too low`,
          max_value: `${ctx.field} is too high`,
          passwords_mismatch: "The passwords don't match",
          confirm_password: 'Please confirm your password',
          tos: 'You must accept the Terms of Service',
          login: 'Incorrect login credentials',
        };

        const message:string = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: false,
      validateOnChange: false,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
