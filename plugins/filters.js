import Vue from 'vue'

Vue.filter('uppercase', val => val.toUpperCase())

Vue.filter('lowercase', val => val.toLowerCase())

Vue.filter('price', val => val + ' TL')
