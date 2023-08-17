// 1. find all elements that include our effect
let elementsWithEffect = document.querySelectorAll('[data-effect]')

// 2. loop through elements, init state

elementsWithEffect.forEach(element => {
    if(element.dataset.effect == 'fade'){
        element.style.opacity = '0'
        
    } else if (element.dataset.effect ='slideLeft'){
        element.style.transform ='translateX(-300%)'

    } else if(element.dataset.effect ='slideRight') {
        element.style.transform ='translateX(300%)'
    } else {
        console.log("ERROR: only fade and slide effects supported")
        console.log(element)
    }
    element.style.transition = '5s'
})

// 3. bind scroll event listener to the body 

window.addEventListener('scroll', () => {
    console.log(window.scrollY)

    // 4. loop through each elemnt and chec coordinate
    elementsWithEffect.forEach( element => {
        if(window.scrollY >= element.getBoundingClientRect().y){
            if(element.dataset.effect == 'fade'){
                element.style.opacity = '1'
            } else if (element.dataset.effect ='slideLeft'){
                element.style.transform ='translateX(0)'
            }  else if(element.dataset.effect ='slideRight') {
                element.style.transform ='translateX(0)'
            }
        }
    } )
})