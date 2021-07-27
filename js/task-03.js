const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector("#gallery");

// const makeImageOfTheGallery = ({ url, alt }) => {
//   const containerRef = document.createElement("li");
//   containerRef.classList.add("gallery__item");

//   const imageRef = document.createElement("img");
//   imageRef.src = url;
//   imageRef.alt = alt;

//   containerRef.append(imageRef);

//   return containerRef;
// };

// const galleryElementsRef = images.map(makeImageOfTheGallery);

// galleryRef.append(...galleryElementsRef);

// console.log(galleryRef);


const galleryRef = document.querySelector("#gallery");

const makeImageOfTheGalleryMarkUp = ({ url, alt }) => {
  return `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}"></li>`;
};

const galleryElementsRef = images.map(makeImageOfTheGalleryMarkUp).join('');

galleryRef.insertAdjacentHTML("beforeend", galleryElementsRef);

console.log(galleryRef);