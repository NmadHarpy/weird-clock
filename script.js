function load(){
    var msg = window.document.querySelector('div#msg')
    var image = window.document.querySelector('img#picture')
    var currentTime = new Date()
    var hour = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    msg.innerHTML = `It's ${hour}:${minutes} o'clock`

    if (hour >= 0 && hour < 12){
        // Good Morning!
        image.src = 'images/manha.png'
        document.body.style.background = '#c9eafd'
    } else if (hour >= 12 && hour < 18){
        // Good Afternoon
        image.src = 'images/tarde.png'
        document.body.style.background = '#b34200'
    } else{
        // Good Night
        image.src = 'images/noite.png'
        document.body.style.background = '#162c47'
    }
}
