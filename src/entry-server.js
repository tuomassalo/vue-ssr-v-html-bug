/* eslint-disable */
import createApp from './app'

/* eslint-disable arrow-body-style */
export default (context) => {
  const { app, store } = createApp()
  context.state = store.state
  return app
}
