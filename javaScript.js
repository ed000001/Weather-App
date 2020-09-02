'use strict'
//https://openweathermap.org/current     API
//http://openweathermap.org/img/wn/10d@2x.png    ICON

window.addEventListener('load',()=>{ 
    let long
    let lat
    let tempDegree = document.querySelector('.temp')
    let location = document.querySelector('.location')
    let description = document.querySelector('.description')
    let icon = document.querySelector('.icon')

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude
            lat = position.coords.latitude
           

            let api =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=91e55b60c76c4d6d160ed13c41150435`
            console.log(long, lat, api)

            fetch(api)
                .then(response => {
                   return response.json()
                })
                .then(data => {
                    const {temp, feels_like} = data.main
                    const city = data.name
                    const descrip = data.weather[0].description
                    const iconData = data.weather[0].icon
                    console.log(data) 
                    tempDegree.innerHTML = temp + ' C'
                    location.innerHTML = 'Temperature in ' + city
                    description.innerHTML = descrip
                    icon.src = `http://openweathermap.org/img/wn/${iconData}@2x.png`
                })
        })
    }
})