class YoutubeVideosFinder {

  find() {
    const lis = document.getElementsByClassName('yt-shelf-grid-item')
    const videos = []

    for (const li of lis) {
      videos.push(new YoutubeVideo(li))
    }

    return videos
  }

}

class YoutubeVideo {

  constructor(element) {
    this.element          = element
    this.title            = element.querySelector('h3 > a').innerHTML
    this.thumbnailElement = element.querySelector('div.yt-lockup-thumbnail')
  }

  hide() {
    this.element.style.display = 'none'
  }

  isDisplayed() {
    this.element.className += ' hide-youtube-watched-videos-extension'
    return this.element.style.display !== 'none'
  }

  hasBeenPartiallyWatched() {
    return this.thumbnailElement.className.indexOf('contains-percent-duration-watched') > -1
  }

  hasBeenWatched() {
    return this.thumbnailElement.className.indexOf(' watched') > -1
  }

}
