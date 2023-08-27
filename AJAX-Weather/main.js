const KEY = '8ceb9e01b7c83cc809c5524357ca9fec'



function loadWeatherData(){
    show.innerHTML = ``

    //HW input < city

    let input = document.querySelector('#city')
    let city = input.value

    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ceb9e01b7c83cc809c5524357ca9fec&units=metric`


    

    let xhr = new XMLHttpRequest()
    xhr.open('GET', CURRENT_WEATHER_URL)

    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText)
        let temp = data.main.temp
        let wind = data.wind.speed
        let description = data.weather[0].description
        let icon = data.weather[0].icon


        // HW* FIND THE DATA IN LOCAL STORAGE

        // Find and set data temperature  
        let h1 = document.createElement('h1')
        if(localStorage.getItem('temp') == temp){           
            h1.innerText = "temperature: " + localStorage.getItem('temp') + " C"
            
        } else {
            h1.innerText = "temperature: " + temp + " C"
            localStorage.setItem('temp', temp)
        }


        // Find and set data description
        let h2 = document.createElement('h2')
        if(localStorage.getItem('description') == description){
            h2.innerText = localStorage.getItem('description')
            
        } else {
            h2.innerText = description
            localStorage.setItem('description', description)
        }



        // Find and set data wind
        let p = document.createElement('p')
        if(localStorage.getItem('wind') == wind){
            p.innerText = "wind speed: " + localStorage.getItem('wind') + 'm/s'
            
        } else {
            p.innerText = "wind speed: " + wind + 'm/s'
            localStorage.setItem('wind', wind)
        }



        // Find and set data icon
        let img= document.createElement('img')
        if(localStorage.getItem('icon') == icon){
            img.src = `http://openweathermap.org/img/wn/${localStorage.getItem('icon')}.png`
           
        } else {
            img.src = `http://openweathermap.org/img/wn/${icon}.png`
            localStorage.setItem('icon', icon)
        }
        
        

        let html = document.createElement('div')
        html.appendChild(h1)
        html.appendChild(h2)
        html.appendChild(p)
        html.appendChild(img)
        document.querySelector('.weather').appendChild(html)  
        
    }

    xhr.send()
}