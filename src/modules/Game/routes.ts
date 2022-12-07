import { ROUTE_NAMES } from '@/router/types'
import { RouteRecordRaw } from 'vue-router'
import GameModule from './module'

const routes: RouteRecordRaw = {
  path: '',
  name: ROUTE_NAMES.GAME,
  component: GameModule,
}

export default routes
