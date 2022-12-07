import { useAppRoute, useAppRouter } from '@/utils/router'
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // you can define simpler values too
    router: ReturnType<typeof useAppRouter>
    route: ReturnType<typeof useAppRoute>
  }
}
