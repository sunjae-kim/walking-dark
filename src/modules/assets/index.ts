export default {
  video: new URL('./walking-dark-long.mp4', import.meta.url).href,
  images: Array.from({ length: 97 }).map((_, idx) => new URL(`./walking-dark-loop/${idx}.jpg`, import.meta.url).href),
  vincent: new URL('./vincent.png', import.meta.url).href,
  bgm: new URL('./bgm.mp3', import.meta.url).href,
  steps: Array.from({ length: 7 }).map((_, idx) => new URL(`./steps/${idx + 1}.m4a`, import.meta.url).href),
}
