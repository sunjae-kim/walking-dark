import { defineComponent, onMounted, ref } from 'vue'
import assets from '../../../assets'

export default defineComponent({
  name: 'Example.Canvas',
  setup () {
    const canvasRef = ref<null | HTMLCanvasElement>(null)
    const progress = ref(0)
    const LOOP_COUNT = 10
    const loadingCount = ref(0)

    let resolveLoading = (_loading: boolean) => {}
    const loadingPromise = new Promise(resolve => {
      resolveLoading = resolve
    })

    const images = assets.images.map(src => {
      const image = new Image()
      image.src = src
      image.addEventListener('load', () => {
        loadingCount.value++
        if (loadingCount.value === assets.images.length) {
          resolveLoading(true)
        }
      })
      return image
    })

    onMounted(async () => {
      const canvas = canvasRef.value
      const context = canvas?.getContext('2d')

      if (!canvas || !context) return
      await loadingPromise
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const onScroll = () => {
        progress.value = (scrollY / (document.body.offsetHeight - window.innerHeight)) * LOOP_COUNT
        requestAnimationFrame(() => {
          const currentIdx = Math.round((assets.images.length - 1) * progress.value) % assets.images.length
          const image = images[currentIdx]
          context.drawImage(
            image,
            /** Source Rectangle */
            0,
            0,
            image.width,
            image.height,
            /** Destination Rectangle */
            0,
            0,
            canvas.width,
            canvas.height,
          )
        })
      }
      window.addEventListener('scroll', onScroll)
      onScroll()
    })

    return () => (
      <div class="grow min-h-[1000vh]">
        <canvas ref={canvasRef} class="fixed inset-0 h-full" />
      </div>
    )
  },
})
