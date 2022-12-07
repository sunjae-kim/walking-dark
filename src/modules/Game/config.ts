const typeThru =
  <T>() =>
  <T2 extends T>(p: T2) =>
    p as T2

type Config = {
  target: string
  active: {
    from: number
    to: number
  }
  style: {
    key: keyof CSSStyleDeclaration
    value: (x: number) => string
    from: number
    to: number
  }
}

export default typeThru<Config[]>()([
  {
    target: '#dimmer-0',
    active: { from: 0, to: 0.2 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 1,
    },
  },
  {
    target: '#dimmer-1',
    active: { from: 0.2, to: 0.5 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0.5,
    },
  },
  {
    target: '#dimmer-2',
    active: { from: 0.5, to: 1 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0.5,
      to: 0,
    },
  },
  {
    target: '#layer-0',
    active: { from: 0, to: 0.1 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0,
    },
  },
  {
    target: '#layer-1',
    active: { from: 0, to: 0.1 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0,
      to: 1,
    },
  },
  {
    target: '#layer-1',
    active: { from: 0, to: 0.1 },
    style: {
      key: 'transform',
      value: (x: number) => `translateY(${x}px)`,
      from: 20,
      to: 0,
    },
  },
  {
    target: '#layer-1',
    active: { from: 0.1, to: 0.2 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0,
    },
  },
  {
    target: '#layer-2',
    active: { from: 0.2, to: 0.3 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0,
      to: 1,
    },
  },
  {
    target: '#layer-2',
    active: { from: 0.2, to: 0.3 },
    style: {
      key: 'transform',
      value: (x: number) => `translateY(${x}px)`,
      from: 20,
      to: 0,
    },
  },
  {
    target: '#layer-2',
    active: { from: 0.3, to: 0.4 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0,
    },
  },
  {
    target: '#layer-3',
    active: { from: 0.4, to: 0.5 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0,
      to: 1,
    },
  },
  {
    target: '#layer-3',
    active: { from: 0.4, to: 0.5 },
    style: {
      key: 'transform',
      value: (x: number) => `translateY(${x}px)`,
      from: 20,
      to: 0,
    },
  },
  {
    target: '#layer-3',
    active: { from: 0.5, to: 0.6 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0,
    },
  },
  {
    target: '#layer-4',
    active: { from: 0.6, to: 0.7 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0,
      to: 1,
    },
  },
  {
    target: '#layer-4',
    active: { from: 0.6, to: 0.7 },
    style: {
      key: 'transform',
      value: (x: number) => `translateY(${x}px)`,
      from: 20,
      to: 0,
    },
  },
  {
    target: '#layer-4',
    active: { from: 0.7, to: 0.8 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 1,
      to: 0,
    },
  },
  {
    target: '#layer-5',
    active: { from: 0.99, to: 1 },
    style: {
      key: 'transform',
      value: (x: number) => `scale(${x})`,
      from: 0.5,
      to: 1,
    },
  },
  {
    target: '#layer-5',
    active: { from: 0.99, to: 1 },
    style: {
      key: 'opacity',
      value: (x: number) => x.toString(),
      from: 0,
      to: 1,
    },
  },
])
