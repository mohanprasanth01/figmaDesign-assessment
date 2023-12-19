function changeImage(imageSrc) {
  document.getElementById("displayImage").src = imageSrc;
}

var selectedColor = "";
var selectedSize = "";
var originalPrice = 19999.00;
var discountPercentage = 35;
var totalPrice =
  originalPrice - (originalPrice * discountPercentage) / 100;
var quantity = 1;

document.getElementById("dynamicPrice").textContent =
  "$ " + totalPrice.toFixed(2);
document.getElementById("discountPercentage").textContent =
  discountPercentage + "% Off";
document.getElementById("originalPrice").textContent =
  "$ " + originalPrice.toFixed(2);

function toggleColor(element) {
  var colorOptions = document.querySelectorAll(".color-option");
  colorOptions.forEach(function (option) {
    option.classList.remove("selected-color");
  });

  element.classList.add("selected-color");
  selectedColor = element.style.backgroundColor;
  updateSelectedOptions();
}

function toggleSize(element) {
  selectedSize = element.value;
  updateSelectedOptions();
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}

function increaseQuantity() {
  quantity++;
  updateQuantity();
}

function updateQuantity() {
  document.getElementById("quantity").textContent = quantity;
}

function updateSelectedOptions() {
  var selectedOptionsElement = document.getElementById("selectedOptions");
  selectedOptionsElement.textContent = "";

  if (selectedColor && selectedSize) {
    var message =
      "Selected: " + selectedColor + " color, " + selectedSize + " size";
    selectedOptionsElement.textContent = message;
  }
}

function addToCart() {
  var selectedOptionsElement = document.getElementById("selectedOptions");
  var dynamicPriceElement = document.getElementById("dynamicPrice");

  if (selectedColor && selectedSize) {
    var discountedPrice =
      originalPrice * ((100 - discountPercentage) / 100);
    dynamicPriceElement.textContent = "$ " + discountedPrice.toFixed(2);
    var message =
      "Embrace Sideboard With  color " +
      selectedColor +
      "  and " +
      selectedSize +
      "  size added to cart, " +
      quantity;
    selectedOptionsElement.textContent = message;
    selectedOptionsElement.style.display = "block";
  } else {
    selectedOptionsElement.textContent =
      "Please select color and size before adding to cart.";
    selectedOptionsElement.style.display = "block";
  }
}
