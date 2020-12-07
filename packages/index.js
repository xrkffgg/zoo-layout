import Layout from './Layout/Layout'

const components = [
  Layout
]

const install = function (app) {
  components.forEach(com => {
    app.component(com.name, com)
  })
}

export default {
  Layout,
  install
}
