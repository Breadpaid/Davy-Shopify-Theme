document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.header__mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      // Add your mobile menu toggle logic here
    });
  }


  const quantityInputs = document.querySelectorAll('quantity-input');
  quantityInputs.forEach(container => {
    const input = container.querySelector('.quantity__input');
    const minusButton = container.querySelector('button[name="minus"]');
    const plusButton = container.querySelector('button[name="plus"]');

    if (input && minusButton && plusButton) {

      minusButton.addEventListener('click', () => {
        const currentValue = parseInt(input.value);
        if (currentValue > parseInt(input.min)) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });


      plusButton.addEventListener('click', () => {
        const currentValue = parseInt(input.value);
        input.value = currentValue + 1;
        input.dispatchEvent(new Event('change'));
      });
    }
  });


  const mediaGallery = document.querySelector('media-gallery');
  if (mediaGallery) {
    const mediaItems = mediaGallery.querySelectorAll('.product__media');
    mediaItems.forEach(media => {
      if (media.querySelector('video')) {
        const video = media.querySelector('video');

        video.addEventListener('play', () => {
          mediaItems.forEach(otherMedia => {
            if (otherMedia !== media && otherMedia.querySelector('video')) {
              otherMedia.querySelector('video').pause();
            }
          });
        });
      }
    });
  }
});
