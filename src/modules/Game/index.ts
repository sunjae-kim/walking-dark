import { Router } from 'vue-router'
import GameModule from './module'
import GameRoutes from './routes'

export default GameModule
export const registerGameRoute = (router: Router) => {
  router.addRoute(GameRoutes)
}
