/* eslint-disable */

import 'es6-promise/auto'
import createApp from './app'



const { app, store } = createApp()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}


// actually mount to DOM
app.$mount('#app')

