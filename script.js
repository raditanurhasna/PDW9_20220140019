let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.parentElement.querySelector('h3').innerText;
        cart.push(productName);
        showAlert(`${productName} has been added to your cart.`);
    });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('WhatsApp').value;
    const message = document.getElementById('message').value;

    let cartItems = cart.length > 0 ? `Products in cart: \n- ${cart.join('\n- ')}` : 'No products in cart.';

    showAlert(`Order successfully sent!\n\nName: ${name}\nWhatsApp: ${whatsapp}\nMessage: ${message}\n\n${cartItems}`);

    cart = [];
    e.target.reset();
});

function showAlert(message) {
    const alertBox = document.getElementById("alertBox");
    document.getElementById("alertMessage").innerText = message;
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    },4000);
}

function closeAlert() {
    document.getElementById("alertBox").classList.remove("show");
}
