cc_11.js
// Select elements 
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Function calculating and updating the total price
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    // Updated total price display
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listeners for product and quantity changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Function to calculate and update the total price
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    // Update the total price display
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Handle order submission and display order summary
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    // Display order summary with selected product, quantity, and total price
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
