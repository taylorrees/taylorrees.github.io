/*!
 * video-control.js
 * (c) 2015 Taylor Rees
 * MIT License
 */

(function videoControl() {
  /**
   * A small function to implement the HTML5 video controls
   * through the use of an overlay.
   *
   */

  var overlays = document.querySelectorAll(".video-overlay");
  var i = 0;

  function init(overlay) {
    /**
     * When the overlay is clicked the video is started and
     * the overlay hidden.
     *
     * @param {HTMLElement} overlay
     */

    var video = overlay.nextElementSibling;

    overlay.style.display = "none";
    video.play();
  };

  function toggle(video) {
    /**
     * When the video is clicked the video is played / paused
     * depending on its current state.
     *
     * @param {HTMLElement} video
     */

    var overlay = video.previousElementSibling;

    if (video.paused == true) {
      video.play();
      overlay.style.display = "none";
    } else {
      video.pause();
      overlay.style.display = "block";
    }
  };

  for (i; i < overlays.length; i++) {
    overlays[i].onclick = function() {
      init(this);
      this.nextElementSibling.onclick = function() {
        toggle(this);
      }
    }
  }

})();
