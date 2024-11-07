// Get the circle element
const circle = document.getElementById('circle');

// Function to generate random positions within the window
function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 100); // -100 to avoid the circle going off-screen
  const y = Math.random() * (window.innerHeight - 100); // -100 for the same reason
  return { x, y };
}

// Function to generate a random color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 60%)`;
}

// Function to generate a random size
function getRandomSize() {
  const size = Math.floor(Math.random() * 150) + 50; // Random size between 50px and 200px
  return size;
}

// Function to generate a random rotation angle
function getRandomRotation() {
  return Math.floor(Math.random() * 360); // Random rotation between 0 and 360 degrees
}

// Function to apply random transformations to the circle
function animateCircle() {
  const { x, y } = getRandomPosition();
  const color = getRandomColor();
  const size = getRandomSize();
  const rotation = getRandomRotation();

  // Apply the transformations to the circle
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.backgroundColor = color;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.transform = `rotate(${rotation}deg)`;
}

// Add event listener to trigger animation on click
document.body.addEventListener('click', animateCircle);

// Call the animation once on load to start the circle in a random position
animateCircle();
