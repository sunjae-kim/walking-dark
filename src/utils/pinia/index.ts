import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import { useAppRoute, useAppRouter } from '../router'

const pinia = createPinia()

export const registerRouterToPinia = () => {
  const router = useAppRouter()
  const route = useAppRoute()
  pinia.use(({ store }) => {
    store.router = markRaw(router)
    store.route = route
  })
}

export default pinia
