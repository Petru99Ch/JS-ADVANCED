

function load(file){



    // 1) create comm object 
    let xhr = new XMLHttpRequest()

    // 2) Configure connection
    xhr.open("GET",  `partials/${file}.html`)

    //4) get the response
    xhr.onload = function(){
        document.querySelector('.dynamic').innerHTML = xhr.responseText 
    }


    // 3) send the request
    xhr.send()

    

}