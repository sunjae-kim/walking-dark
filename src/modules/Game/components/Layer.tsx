import { defineComponent } from 'vue'

export default defineComponent({
  props: { id: { type: String } },
  name: 'Game.Layer',
  setup (props, { slots }) {
    return () => (
      <div class="fixed inset-0 flex justify-center items-center">
        <div class="opacity-0 text-4xl" id={props.id}>{slots.default?.()}</div>
      </div>
    )
  },
})
