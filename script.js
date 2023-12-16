document.addEventListener("DOMContentLoaded", function () {
  generateImage();
});

function generateImage() {
  const imageContainer = document.getElementById("imageContainer");

  //create images elements 
  const classicImage = document.createElement("img");
  const carImage = document.createElement("img");

  // Set image sources
  classicImage.src = "images/classic.jpeg";
  carImage.src = "images/car.jpeg";

  // Set alt attributes for accessibility
  classicImage.alt = "Classic Car";
  carImage.alt = "Car Image";

  // Append images to the container
  imageContainer.appendChild(classicImage);
  imageContainer.appendChild(carImage);
}
