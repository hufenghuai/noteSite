import Vue from 'vue'
import Router from 'vue-router'
import BookRack from 'pages/bookrack/bookrack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bookrack',
      name: 'BookRack',
      component: BookRack
    }
  ]
})
