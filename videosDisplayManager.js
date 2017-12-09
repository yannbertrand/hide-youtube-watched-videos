class VideosDisplayManager {

  constructor(videosFinder) {
    this.videosFinder                 = videosFinder
    this.doHidePartiallyWatchedVideos = true
  }

  manageVideosDisplay() {
    const { watchedVideos, partiallyWatchedVideos } = this.getVideosToHide()

    this.hideWatchedVideos(watchedVideos)
    this.hidePartiallyWatchedVideos(partiallyWatchedVideos)
  }

  hideWatchedVideos(videos) {
    if (videos.length === 0) {
      return
    }

    console.groupCollapsed(`Hiding ${videos.length} watched videos`)
    console.info(new Date())

    for (const video of videos) {
      console.info(video.title)
      video.hide()
    }

    console.groupEnd()
  }

  hidePartiallyWatchedVideos(videos) {
    if (! this.doHidePartiallyWatchedVideos) {
      return
    }

    if (videos.length === 0) {
      return
    }

    console.groupCollapsed(`Hiding ${videos.length} partially watched videos`)
    console.info(new Date())

    for (const video of videos) {
      console.info(video.title)
      video.hide()
    }

    console.groupEnd()
  }

  getVideosToHide() {
    const videos                 = this.videosFinder.find()
    const watchedVideos          = []
    const partiallyWatchedVideos = []

    for (const video of videos) {
      if (video.hasBeenWatched()) {
        if (video.isDisplayed()) {
          watchedVideos.push(video)
          continue
        }
      }
      if (video.hasBeenPartiallyWatched()) {
        if (video.isDisplayed()) {
          partiallyWatchedVideos.push(video)
        }
      }
    }

    return { watchedVideos, partiallyWatchedVideos }
  }

}
