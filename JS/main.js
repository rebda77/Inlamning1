
//Function to be able to put products in the shopping cart
function getItem(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(data => addToCart(data))
        .catch(err => console.error(err));
}

//Use localStorage as shopping cart, by storing data
function addToCart(item) {
    if (localStorage.getItem("cart") === null) {
        var cart = [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}