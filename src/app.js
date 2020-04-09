/* eslint-disable */

import Vue from 'vue'

import App from './App.vue'
import createStore from './store'


// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export default function createApp () {
  // create store and router instances
  const store = createStore()

  // create the app instance.
  const app = new Vue({
    store,
    render: h => h(App),
  })

  // expose the app and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, store }
}
