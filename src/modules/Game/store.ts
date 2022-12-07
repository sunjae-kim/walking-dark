import { defineStore } from 'pinia'
import { ref } from 'vue'
import assets from '../../assets'
import configs from './config'

export default defineStore('game.store', () => {
  const LOOP_COUNT = 20
  const progress = ref(0)
  const initialized = ref(false)

  /** Load canvas images */
  let loadingCount = 0
  let resolveLoading = (_loading: boolean) => {}
  const loading = new Promise(resolve => {
    resolveLoading = resolve
  })
  const images = assets.images.map(src => {
    const image = new Image()
    image.src = src
    image.addEventListener('load', () => {
      if (++loadingCount === assets.images.length + assets.steps.length) {
        resolveLoading(true)
        initialized.value = true
      }
    })
    return image
  })
  let stepCount = 0
  const steps = assets.steps.map(src => {
    const audio = new Audio()
    audio.src = src
    audio.addEventListener('loadeddata', () => {
      if (++loadingCount === assets.images.length + assets.steps.length) {
        resolveLoading(true)
        initialized.value = true
      }
    })
    return audio
  })

  return {
    loading,
    initialized,
    drawCanvas (canvas: HTMLCanvasElement) {
      const context = canvas?.getContext('2d')
      if (!context) throw new Error('canvas context not defined')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      return () => {
        progress.value = scrollY / (document.body.offsetHeight - window.innerHeight)
        const currentIdx = Math.round((assets.images.length - 1) * progress.value * LOOP_COUNT) % assets.images.length
        const image = images[currentIdx]
        /** Source Rectangle | Destination Rectangle */
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height)

        if (currentIdx === 0 || currentIdx === Math.ceil((assets.images.length - 1) / 2)) {
          // const prev = Math.max(0, (stepCount - 1) % steps.length)
          // if (steps[prev].paused) {
          steps[stepCount++ % steps.length].play()
          // }
        }
      }
    },
    introFadeIn () {
      return configs.map(config => {
        const { active, style, target } = config
        const element = document.querySelector(target) as HTMLElement
        if (!element) return () => {}

        return () => {
          if (progress.value < active.from || progress.value > active.to) {
            element.style.display = 'none'
            return
          }
          element.style.display = 'block'
          const localProgress = Math.max(0, progress.value - active.from)
          const value = (style.to - style.from) * (localProgress / (active.to - active.from)) + style.from
          element.style[style.key] = style.value(value)
        }
      })
    },
  }
})
