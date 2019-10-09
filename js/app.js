// For adding to cart
const atc = document.getElementsByTagName("button")
console.log(atc)
atc[1].addEventListener("click", function(){
    event.preventDefault()
    alert("Added to cart!")
})
console.log(atc)

// For Subscribing
const el = document.getElementsByClassName("subscribe")
console.log(el)
el[0].addEventListener("click", function(){
    event.preventDefault()
    alert("Thank you for Subscribing!")
})
console.log(el)
