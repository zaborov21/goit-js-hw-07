import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");


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

function onGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = e.target.dataset.source;
  basicLightbox.create(`
		<img width="1400" height="900" src="${largeImgUrl}">
	`).show()
}

galleryRef.addEventListener("click", onGallery);

document.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.code === 'Escape') {
    console.log("You are clicked: ", e.code);
    
  }
  
});
