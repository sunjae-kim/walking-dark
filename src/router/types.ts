export enum ROUTE_NAMES {
  GAME = 'game',
  VIDEO_EXAMPLE = 'video example',
  IMAGE_EXAMPLE = 'image example',
  CANVAS_EXAMPLE = 'canvas example',
}

export type RouteMap = {
  [ROUTE_NAMES.GAME]: {
    query: Partial<{}>
    params: {}
  }
  [ROUTE_NAMES.VIDEO_EXAMPLE]: {
    query: Partial<{}>
    params: {}
  }
  [ROUTE_NAMES.IMAGE_EXAMPLE]: {
    query: Partial<{}>
    params: {}
  }
  [ROUTE_NAMES.CANVAS_EXAMPLE]: {
    query: Partial<{}>
    params: {}
  }
}
