import { extend, localize } from 'vee-validate'
import tr from 'vee-validate/dist/locale/tr.json'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, rules[rule])
})

localize('tr', tr)
