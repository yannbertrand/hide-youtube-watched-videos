function hideWatchedVideos() {
  const videos = document.getElementsByClassName('yt-shelf-grid-item')

  for (var video of videos) {
    const hasBeenWatched = video.getElementsByClassName('watched').length === 1
    if (hasBeenWatched) {
      video.style.display = 'none'
    }
  }
}

setInterval(hideWatchedVideos, 1000)
hideWatchedVideos()
