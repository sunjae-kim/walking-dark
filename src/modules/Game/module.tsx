import { defineComponent, onMounted, ref } from 'vue'
import assets from '../../assets'
import Layer from './components/Layer'
import useViewModel from './store'

export default defineComponent({
  name: 'Game',
  setup () {
    const viewModel = useViewModel()
    const canvasRef = ref<null | HTMLCanvasElement>(null)
    const audio = new Audio(assets.bgm)
    const started = ref(false)
    const startRef = ref<null | HTMLElement>(null)

    onMounted(async () => {
      const canvas = canvasRef.value
      if (!canvas) return
      await viewModel.loading
      const drawCanvas = viewModel.drawCanvas(canvas)
      const fns = viewModel.introFadeIn()

      const tick = () =>
        requestAnimationFrame(() => {
          drawCanvas()
          fns.forEach(fn => fn())
        })
      window.addEventListener('scroll', tick)
    })

    return () => [
      <div ref={startRef} class="fixed inset-0 flex justify-center items-center" v-show={!started.value}>
        <button
          class="text-[#880808] text-5xl"
          onClick={() => {
            audio.play()
            startRef.value!.animate([{ opacity: 1 }, { opacity: 0 }], 1000)
            setTimeout(() => {
              started.value = true
            }, 1000)
          }}
        >
          시작하기
        </button>
      </div>,
      <div
        v-show={viewModel.initialized && started.value}
        class="grow overflow-x-hidden text-[#880808]"
        style={{ minHeight: 'calc(2000 * var(--vh))' }}
      >
        <canvas id="canvas" ref={canvasRef} class="fixed inset-0" />
        <div id="dimmer-0" class="fixed inset-0 bg-black" />
        <div id="dimmer-1" class="fixed inset-0 bg-black" />
        <div id="dimmer-2" class="fixed inset-0 bg-black" />
        <Layer id="layer-0"></Layer>
        <Layer id="layer-1">여기가.. 어디지?</Layer>
        <Layer id="layer-2">정신을 차려보니 난 걷고있었다..</Layer>
        <Layer id="layer-3">끝없이 이어지는 복도</Layer>
        <Layer id="layer-4">불길한 예감이 들기 시작한다</Layer>
        <Layer id="layer-5">
          <img class="w-96 h-96" src={assets.vincent} alt="vincent" />
        </Layer>
      </div>,
    ]
  },
})
