import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { registerRouterToPinia } from './utils/pinia'

export default defineComponent({
  name: 'App',
  setup () {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    registerRouterToPinia()

    return () => (
      <div class="min-h-screen !min-h-screen-ios flex flex-col">
        <RouterView></RouterView>
      </div>
    )
  },
})
