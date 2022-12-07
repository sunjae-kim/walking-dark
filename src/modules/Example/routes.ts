import { ROUTE_NAMES } from '@/router/types'
import { RouteRecordRaw } from 'vue-router'
import CanvasExample from './pages/CanvasExample'
import ImageExample from './pages/ImageExample'
import VideoExample from './pages/VideoExample'

const routes: RouteRecordRaw = {
  path: '/example',
  children: [
    {
      path: 'video',
      name: ROUTE_NAMES.VIDEO_EXAMPLE,
      component: VideoExample,
    },
    {
      path: 'image',
      name: ROUTE_NAMES.IMAGE_EXAMPLE,
      component: ImageExample,
    },
    {
      path: 'canvas',
      name: ROUTE_NAMES.CANVAS_EXAMPLE,
      component: CanvasExample,
    },
  ],
}

export default routes
