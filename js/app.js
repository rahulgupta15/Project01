// For adding to cart
const atc = document.querySelectorAll("button")
// atc[1].addEventListener("click", function(){
//     event.preventDefault()
//     alert("Added to cart!")
// console.log(atc)
// })
console.log(atc)
atc.forEach(function(item) {
    item.addEventListener("click", function(){
        event.preventDefault()
        alert("Added to cart!")
        console.log(atc)
})
})

// For Subscribing
const el = document.getElementsByClassName("subscribe")
console.log(el)
el[0].addEventListener("click", function(){
    event.preventDefault()
    alert("Thank you for Subscribing!")
})
console.log(el)

// For Carousel
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
cellAlign: 'center',
contain: true
});

var flkty = new Flickity('.main-carousel', {
})