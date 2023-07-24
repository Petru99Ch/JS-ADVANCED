//  load component resources

function loadComponent (name) {

    
    let link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `src/${name}/${name}.css`
    link.addEventListener("error", function (){alert(`ERROR: can not ${name}.css`)})

    document.head.appendChild(link)

    let script = document.createElement('script')
    script.src = `src/${name}/${name[0].toUpperCase() + name.substring(1)}.js`
    

    document.body.appendChild(script)

    // HW1 : 
    script.addEventListener("error", function (){alert(`ERROR: can not ${name}.js`)})
}
loadComponent("user")
loadComponent("like")