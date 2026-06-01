document.addEventListener("DOMContentLoaded", function () {

    let teddyBearPrice = 500;
    let chocolateBoxPrice = 300;

    let total = teddyBearPrice + chocolateBoxPrice;

    document.getElementById("total").innerHTML =
        "Total = ₹" + total;

});