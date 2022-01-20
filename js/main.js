




function timer(){
    const date = new Date()
    const day = document.querySelector('.day_number')
    const hour = document.querySelector('.hour_number')
    const minute = document.querySelector('.minute_number')
    const second = document.querySelector('.second_number')
    
    day.innerHTML = 365 - date.getDate()
    hour.innerHTML = 24 - date.getHours()
    minute.innerHTML = 60 - date.getMinutes()
    second.innerHTML = 60 - date.getSeconds()  
}


setInterval(timer, 100); 





function snowing(){
    const wrap = document.querySelector('.wrapper')
    const newSnow = document.createElement('i')


    newSnow.classList = 'fas fa-snowflake'
    newSnow.style.left = Math.random()*1400 + 'px'
    newSnow.style.opacity = Math.random()*1
    newSnow.style.animationDuration = Math.random()*3 + 2 + 's' 
    wrap.append(newSnow)

setTimeout(()=>{
    newSnow.remove()
}, 4000)

}


setInterval(snowing, 50);