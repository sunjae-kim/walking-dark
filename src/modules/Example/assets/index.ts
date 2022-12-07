export default {
  video: new URL('./walking-dark-long.mp4', import.meta.url).href,
  images: Array.from({ length: 97 }).map((_, idx) => new URL(`./walking-dark-loop/${idx}.jpg`, import.meta.url).href),
}
