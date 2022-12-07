import { defineComponent, onMounted, ref } from 'vue'
import assets from '../assets'

export default defineComponent({
  name: 'Example.Image',
  setup () {
    const progress = ref(0)
    const currentIdx = ref(0)
    const LOOP_COUNT = 10

    onMounted(() => {
      window.addEventListener('scroll', () => {
        progress.value = (scrollY / (document.body.offsetHeight - window.innerHeight)) * LOOP_COUNT

        requestAnimationFrame(() => {
          currentIdx.value = Math.round((assets.images.length - 1) * progress.value) % assets.images.length
        })
      })
    })

    return () => (
      <div class="grow bg-black min-h-[1000vh]">
        <img class="fixed inset-0 h-full" src={assets.images[currentIdx.value]} />
      </div>
    )
  },
})
