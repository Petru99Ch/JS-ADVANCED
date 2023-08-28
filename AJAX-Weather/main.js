const KEY = '8ceb9e01b7c83cc809c5524357ca9fec'



function loadWeatherData(){
    show.innerHTML = ``
   
    //HW input < city

    let input = document.querySelector('#city')
    let city = input.value

    let timeOnClick= new Date()
    let dayTime = timeOnClick.getDate()

    if(localStorage.getItem('time') == dayTime){
        let h1 = document.createElement('h1')
        h1.innerText = "temperature: " + localStorage.getItem('temp') + " C"

        let h2 = document.createElement('h2')
        h2.innerText = localStorage.getItem('description')

        let p = document.createElement('p')
        p.innerText = "wind speed: " + localStorage.getItem('wind') + ''

        let img= document.createElement('img')
        img.src = `http://openweathermap.org/img/wn/${localStorage.getItem('icon')}.png`

        let html = document.createElement('div')
        html.appendChild(h1)
        html.appendChild(h2)
        html.appendChild(p)
        html.appendChild(img)
        document.querySelector('.weather').appendChild(html)  

    } else {

    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ceb9e01b7c83cc809c5524357ca9fec&units=metric`


    

    let xhr = new XMLHttpRequest()
    xhr.open('GET', CURRENT_WEATHER_URL)

    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText)
        let temp = data.main.temp
        let wind = data.wind.speed
        let description = data.weather[0].description
        let icon = data.weather[0].icon
       

        let h1 = document.createElement('h1')
        h1.innerText = "temperature: " + temp + " C"
        localStorage.setItem('temp', temp)

        let h2 = document.createElement('h2')
        h2.innerText = description
        localStorage.setItem('description', description)

        let p = document.createElement('p')
        p.innerText = "wind speed: " + wind + 'm/s'
        localStorage.setItem('wind', wind)

        let img= document.createElement('img')
        img.src = `http://openweathermap.org/img/wn/${icon}.png`
        localStorage.setItem('icon', icon)

        // time storage
        



        let html = document.createElement('div')
        html.appendChild(h1)
        html.appendChild(h2)
        html.appendChild(p)
        html.appendChild(img)
        document.querySelector('.weather').appendChild(html)  
        
    }

    xhr.send()

    let time = new Date()
    let day = time.getDate()
    localStorage.setItem('time', day)

    }



    
}