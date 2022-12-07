import { registerExampleRoute } from '@/modules/Example'
import { registerGameRoute } from '@/modules/Game'
import NotFound404 from '@/modules/NotFound404'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from './types'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
      beforeEnter: (to, from, next) => {
        next({ name: ROUTE_NAMES.GAME })
      },
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

export default {
  install (app: App) {
    // Register Routes
    registerExampleRoute(router)
    registerGameRoute(router)
    app.use(router)
  },
}
