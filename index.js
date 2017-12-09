var browser = browser || chrome

console.groupCollapsed(`Hide YouTube watched videos extension`)
const youtubeVideosFinder = new YoutubeVideosFinder()
const videosManager = new VideosDisplayManager(youtubeVideosFinder)

setInterval(function () {
  videosManager.manageVideosDisplay()
}, 1000)

videosManager.manageVideosDisplay()
