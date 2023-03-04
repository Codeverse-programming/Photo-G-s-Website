const faqs = document.querySelectorAll(".faq");
// Executes a callback function for each token in the list
faqs.forEach(faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
    })
   
});