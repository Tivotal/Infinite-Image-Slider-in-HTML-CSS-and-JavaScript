/* Created by Tivotal */

let carousel = document.querySelector(".carousel");
let images = document.querySelectorAll("img");
let wrapper = document.querySelector(".wrapper");
let buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

//function to auto slide the images
let autoPlay = () => {
  //this will call slide image function once by 2s
  intervalId = setInterval(() => slideImages(++imageIndex), 2000);
};

let slideImages = () => {
  //getting updated index of image
  imageIndex =
    imageIndex === images.length
      ? 0
      : imageIndex < 0
      ? images.length - 1
      : imageIndex;

  //updating carousel display to show perticular image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

//calling auto play function
autoPlay();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //removing auto play
    clearInterval(intervalId);

    //calculating image index based on id of the clicked btn
    imageIndex += e.target.id === "next" ? 1 : -1;

    //calling slide image function
    slideImages(imageIndex);

    //restrarting auto play
    autoPlay();
  });
});

//stop auto play on hover
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

//resume auto play once mouse leaves the wrapper
wrapper.addEventListener("mouseleave", autoPlay);
