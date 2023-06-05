import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onGallery);
document.addEventListener("keydown", closeGallery);


const makeMarkup = () => {
  const murkup = galleryItems.map(({ preview, original, description }) => {

    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`

  }).join("");
  return murkup;
}
galleryRef.insertAdjacentHTML('beforeend', makeMarkup());

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', closeGallery);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', closeGallery);
    },
  }
);


function onGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = e.target.dataset.source;
  instance.element().querySelector('img').src = largeImgUrl;
  instance.show();
}


function closeGallery(e) {
  e.preventDefault();
  if (e.code === 'Escape') {
    instance.close()
  }
}
