import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue,
  options,
  router
}) => {
  console.log('ss')
  Vue.use(Element)
}
