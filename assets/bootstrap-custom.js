/*!
 * Bootstrap v5.3.0
 */
import Alert from 'bootstrap/js/dist/alert'
import Button from 'bootstrap/js/dist/button'
import Carousel from 'bootstrap/js/dist/carousel'
import Collapse from 'bootstrap/js/dist/collapse'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import Popover from 'bootstrap/js/dist/popover'
import ScrollSpy from 'bootstrap/js/dist/scrollspy'
import Tab from 'bootstrap/js/dist/tab'
import Toast from 'bootstrap/js/dist/toast'
import Tooltip from 'bootstrap/js/dist/tooltip'

// Initialize all Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
  // Enable tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
  })

  // Enable popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl)
  })
})
