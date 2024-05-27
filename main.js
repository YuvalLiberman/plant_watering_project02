

let counter = 0
let btn_2 = document.getElementById('btn2')

document.getElementById('btn1').addEventListener('click', function () {
    console.log("javaScript is working too!")
    
    if (counter < 100) {counter = counter + 1}
    btn_2.innerHTML = counter + ` %`

    updateWaterLevel(counter)

})

function updateWaterLevel(level) {
    document.getElementById('waterLevel').style.height = level + '%'
  }  


  //testtttttttttt