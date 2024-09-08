// JavaScript to handle basic button functionality
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Item added to cart!');
        });
    });
});
