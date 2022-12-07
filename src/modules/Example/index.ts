import { Router } from 'vue-router'
import ExampleModule from './module'
import ExampleRoutes from './routes'

export default ExampleModule
export const registerExampleRoute = (router: Router) => {
  router.addRoute(ExampleRoutes)
}
