import { defineComponent, onMounted, ref } from 'vue'
import assets from '../../../assets'

export default defineComponent({
  name: 'Example.Video',
  setup () {
    const videoRef = ref<HTMLVideoElement | null>(null)
    const progress = ref(0)
    const duration = ref(0)

    onMounted(() => {
      const video = videoRef.value
      if (!video) return
      video.addEventListener('loadeddata', () => {
        duration.value = video.duration
      })

      window.addEventListener('scroll', () => {
        progress.value = scrollY / (document.body.offsetHeight - window.innerHeight)
        if (progress.value < 0) progress.value = 0
        if (progress.value > 1) progress.value = 1

        requestAnimationFrame(() => {
          video.currentTime = duration.value * progress.value
        })
      })
    })

    return () => (
      <div class="grow bg-black min-h-[1000vh]">
        <video class="fixed inset-0 h-full" ref={videoRef} src={assets.video} />
      </div>
    )
  },
})
