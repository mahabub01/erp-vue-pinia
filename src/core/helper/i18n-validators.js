// import * as validators from '@vuelidate/validators'
// import { i18n } from "@/i18n"

// const { createI18nMessage } = validators

// // Create your i18n message instance. Used for vue-i18n@9
// const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })

// // wrap each validator.
// export const required = withI18nMessage(validators.required)
// // validators that expect a parameter should have `{ withArguments: true }` passed as a second parameter, to annotate they should be wrapped
// export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
// // or you can provide the param at definition, statically
// export const maxLength = withI18nMessage(validators.maxLength(10))