let blogElement = document.getElementById('blog')
let blogOptionElement = document.getElementById( 'blog-options')

blogElement.addEventListener("mouseover",function(event){
    let sousElement = document.getElementById('blog-options')
    sousElement.classList.add("show")
})
blogOptionElement.addEventListener("mouseleave",function(event){
    let sousElement = document.getElementById('blog-options')
    sousElement.classList.remove("show")
})



let contactMoiElement = document.getElementById('contactMoi')
let contactInfo = document.getElementById('contact-info')

contactMoiElement.addEventListener("mouseover",function(event){
    let sousElement = document.getElementById('contact-info')
    sousElement.classList.add("show")
})
contactInfo.addEventListener("mouseleave",function(event){
    let sousElement = document.getElementById('contact-info')
    sousElement.classList.remove("show")
})