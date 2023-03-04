document.addEventListener("DOMContentLoaded", () => {
    const sarahSection = document.querySelector("#sarah-hidden");
    const personSection = document.querySelector("#person-hidden");
    const gradSection = document.querySelector("#grad-hidden");
    const selectButton = document.querySelector("#cardImage");

    document.querySelector("#linkAll").addEventListener("click", e => {
        e.preventDefault();
        personSection.classList.remove("form--hidden");
        gradSection.classList.remove("form--hidden");
        sarahSection.classList.remove("form--hidden");
    });

    document.querySelector("#linkClass").addEventListener("click", e => {
        e.preventDefault();
        personSection.classList.add("form--hidden");
        gradSection.classList.add("form--hidden");
        sarahSection.classList.remove("form--hidden");
    });

    document.querySelector("#linkPerson").addEventListener("click", e => {
        e.preventDefault();
        personSection.classList.remove("form--hidden");
        gradSection.classList.add("form--hidden");
        sarahSection.classList.add("form--hidden");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const shippingDetails = document.querySelector("#shipping-section")
    const orderSummary = document.querySelector("#order-summary-section")

    document.querySelector("#linkShipping").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.remove("form--hidden")
        orderSummary.classList.add("form--hidden")
    });

    document.querySelector("#linkSummary").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.add("form--hidden")
        orderSummary.classList.remove("form--hidden")
    });
});

document.querySelector("#btn").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#cardImage").style.border = "10px solid brown"
    document.querySelector("#cardImage").style.borderRadius = "25px"
    // document.querySelector(".text").textContent = "Unselect Photo"
});

document.querySelector(".text").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#cardImage").style.border = "none"
    document.querySelector("#cardImage").style.borderRadius = "0"
});

document.querySelector("#button").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#cardImages").style.border = "10px solid brown"
    document.querySelector("#cardImages").style.borderRadius = "25px"
    // document.querySelector(".text").textContent = "Unselect Photo"
});

document.querySelector("#button1").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#cardImage1").style.border = "10px solid brown"
    document.querySelector("#cardImage1").style.borderRadius = "25px"
    // document.querySelector(".texted").textContent = "Unselect Photo"
});

document.querySelector("#button2").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#cardImage2").style.border = "10px solid brown"
    document.querySelector("#cardImage2").style.borderRadius = "25px"
    // document.querySelector(".text2").textContent = "Unselect Photo"
});
