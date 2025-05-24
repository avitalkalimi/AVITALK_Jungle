// Array of 7 animals with name, image path, sound path, and number key
const animals = [
  { name: "lion", img: "assets/images/LION.png", sound: "assets/sounds/lion.wav", key: "1" },
  { name: "monkey", img: "assets/images/monkey.png", sound: "assets/sounds/monkey.wav", key: "2" },
  { name: "elephant", img: "assets/images/elephant.png", sound: "assets/sounds/elephant.mp3", key: "3" },
  { name: "frog", img: "assets/images/frog.png", sound: "assets/sounds/frog.mp3", key: "4" },
  { name: "snake", img: "assets/images/snake.png", sound: "assets/sounds/snake.wav", key: "5" },
  { name: "wolf", img: "assets/images/wolf.png", sound: "assets/sounds/wolf.wav", key: "6" },
  { name: "rooster", img: "assets/images/rooster.png", sound: "assets/sounds/rooster.wav", key: "7" }
];

// Select the container where the images will be added
const gallery = document.querySelector(".animal-gallery");

// Create an image + label for each animal
animals.forEach(animal => {
  // Create wrapper container
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  // Create image element
  const img = document.createElement("img");
  img.src = animal.img;
  img.alt = animal.name;
  img.classList.add("animal");

  // On click, play the animal's sound
  img.addEventListener("click", () => {
    new Audio(animal.sound).play();
  });

  // Create a small label with the key number
  const label = document.createElement("span");
  label.classList.add("animal-label");
  label.innerText = `Key: ${animal.key}`;

  // Add image and label to container, and then to the page
  container.appendChild(img);
  container.appendChild(label);
  gallery.appendChild(container);
});

// Play animal sound when number key (1–7) is pressed
document.addEventListener("keydown", (event) => {
  const animal = animals.find(a => a.key === event.key);
  if (animal) {
    new Audio(animal.sound).play();
  }
});

// BONUS: play background music on first user click (required by browsers)
window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
}, { once: true });

// BONUS FEATURE NOT TAUGHT IN CLASS:
// Welcome message with delay (using setTimeout)
setTimeout(() => {
  alert("Welcome to the Jungle!");
}, 2000);

// setTimeout delays the function call by 2000 milliseconds (2 seconds)
