import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Game',
  setup () {
    return () => <RouterView />
  },
})
