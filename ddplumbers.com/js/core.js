
// Responsive navigation handler
// The functions below are responsible for the actions
// related to the actions performed by the navigation bar
// at certain sizes

var menuButton = document.getElementById('menu-button');

function openMenu() {
  var navigation = document.getElementById('navigation');
  navigation.className = 'navigation open';
}

menuButton.onclick = function() {
  openMenu();
}

function closeMenu() {
  var navigation = document.getElementById('navigation');
  navigation.className = 'navigation closed';
}

var closeMenuButton = document.getElementById('close-menu-button');
closeMenuButton.onclick = function() {
  closeMenu();
}

var siteNav = document.getElementsByClassName('list--site-navigation');
var siteNavElements = siteNav[0].children;
var navigation = document.getElementById('navigation');
if (navigation.style.width < 600) {
  for (var i = 0; i < siteNavElements.length; i++) {
    siteNavElements[i].onclick = function() {
      // delays the collapse of the navigation bar slightly
      setTimeout( function () {
        closeMenu();
      }, 300);
    }
  }
}


// A function that defines the gallery carousel functions.
// To invoke the function pass an array of images, the gallery
// container and the preloader container.

// The first child of the gallery must be 'controls'
// The 'controls' child must then have 3 children:
// 1. prev image
// 2. next image
// 3. image counter

function carousel(images, gallery, preloader) {

  var count = 0;
  preloader.style.background = "url('" + images[count + 1] + "')";

  // When the next image data action is called the
  // next image will be loaded into placed and the
  // (hidden) preloader will load the image next in sequence.

  function nextImage(next) {
    next.onclick = function() {
      if (count != images.length - 1) {
        count = count + 1;
      } else {
        count = 0;
      }
      gallery.style.background = "url('" + images[count] + "')";
      if (count != images.length - 1) {
        preloader.style.background = "url('" + images[count + 1] + "')";
      } else {
        preloader.style.background = "url('" + images[count - 1] + "')";
      }
      imageCount();
    }
  }

  nextImage(gallery.children[0].children[1]);
  nextImage(gallery.children[0].children[2]);

  // When the previous image data action is called the
  // previous image will be loaded into placed and the
  // (hidden) preloader will load the previous image in sequence.

  function prevImage(previous) {
    previous.onclick = function() {
      if (count != 0) {
        count = count - 1;
      } else {
        count = images.length - 1;
      }
      gallery.style.background = "url('" + images[count] + "')";
      if (count != 0) {
        preloader.style.background = "url('" + images[count - 1] + "')";
      } else {
        preloader.style.background = "url('" + images[count + 1] + "')";
      }
      imageCount();
    }
  }

  prevImage(gallery.children[0].children[0]);

  // When the image in the gallery is changed the image
  // counter will be appropriately updated.
  function imageCount() {
    var counter = gallery.children[0].children[2];
    counter.innerHTML = (count + 1) + '/' + images.length;
  }
  imageCount();
}

// Give the before indoor gallery function
var beforeIndoorGallery = document.getElementById('before-indoor-gallery');
var beforeIndoorPreloader = document.getElementById('before-indoor-preloader');
var beforeIndoorImages = [
  'images/gallery/indoors/01.jpeg',
  'images/gallery/indoors/02.jpeg',
  'images/gallery/indoors/03.jpeg',
  'images/gallery/indoors/04.jpeg',
  'images/gallery/indoors/05.jpeg',
  'images/gallery/indoors/06.jpeg',
  'images/gallery/indoors/07.jpeg',
  'images/gallery/indoors/08.jpeg',
  'images/gallery/indoors/09.jpeg',
  'images/gallery/indoors/10.jpeg',
  'images/gallery/indoors/11.jpeg',
  'images/gallery/indoors/12.jpeg',
  'images/gallery/indoors/13.jpeg',
  'images/gallery/indoors/14.jpeg',
  'images/gallery/indoors/15.jpeg',
  'images/gallery/indoors/16.jpeg',
  'images/gallery/indoors/17.jpeg',
  'images/gallery/indoors/18.jpeg']

carousel(beforeIndoorImages, beforeIndoorGallery, beforeIndoorPreloader);

// Give the before outdoor gallery function
var beforeOutdoorGallery = document.getElementById('before-outdoor-gallery');
var beforeOutdoorPreloader = document.getElementById('before-outdoor-preloader');
var beforeOutdoorImages = [
  "images/gallery/outdoors/dafen-park-outdoors-11.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-08.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-01.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-02.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-03.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-04.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-05.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-06.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-12.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-13.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-14.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-15.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-16.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-17.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-18.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-19.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-20.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-21.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-22.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-23.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-24.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-25.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-26.jpg"]

carousel(beforeOutdoorImages, beforeOutdoorGallery, beforeOutdoorPreloader);

// Images of the finished building are still to be added.

/*

// Give the before indoor gallery function
var afterIndoorGallery = document.getElementById('after-indoor-gallery');
var afterIndoorPreloader = document.getElementById('after-indoor-preloader');
var afterIndoorImages = [
  "images/gallery/indoors/dafen-park-indoors-14.jpg",
  "images/gallery/indoors/dafen-park-indoors-13.jpg",
  "images/gallery/indoors/dafen-park-indoors-11.jpg",
  "images/gallery/indoors/dafen-park-indoors-10.jpg",
  "images/gallery/indoors/dafen-park-indoors-09.jpg",
  "images/gallery/indoors/dafen-park-indoors-08.jpg",
  "images/gallery/indoors/dafen-park-indoors-07.jpg",
  "images/gallery/indoors/dafen-park-indoors-06.jpg"]

carousel(afterIndoorImages, afterIndoorGallery, afterIndoorPreloader);

// Give the before outdoor gallery function
var afterOutdoorGallery = document.getElementById('after-outdoor-gallery');
var afterOurdoorPreloader = document.getElementById('after-outdoor-preloader');
var afterOutdoorImages = [
  "images/gallery/outdoors/dafen-park-outdoors-11.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-08.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-01.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-02.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-03.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-04.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-05.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-06.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-10.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-12.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-13.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-14.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-15.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-16.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-17.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-18.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-19.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-20.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-21.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-22.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-23.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-24.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-25.jpg",
  "images/gallery/outdoors/dafen-park-outdoors-26.jpg"]

carousel(afterOutdoorImages, afterOutdoorGallery, afterOurdoorPreloader);

*/
