var browser = browser || chrome

const youtubeVideosFinder = new YoutubeVideosFinder()
const videosManager = new VideosDisplayManager(youtubeVideosFinder)

setInterval(function () {
  videosManager.manageVideosDisplay()
}, 1000)

videosManager.manageVideosDisplay()
