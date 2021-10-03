const colorBox = document.getElementById('color')
const hotOrCold = document.getElementById('hotOrCold')

let color

console.log("Script loaded")
init()

async function init(){
    color = {
        r: Math.round(Math.random() * 1000) /1000,
        g: Math.round(Math.random() * 1000) /1000,
        b: Math.round(Math.random() * 1000) /1000,
    }

    if(color.r == 0 || color.r == 1) color.r = await Math.round(Math.random() * 1000) /1000
    if(color.g == 0 || color.g == 1) color.g = await Math.round(Math.random() * 1000) /1000
    if(color.b == 0 || color.b == 1) color.b = await Math.round(Math.random() * 1000) /1000


    colorBox.style.backgroundColor = `rgb(${color.r*255},${color.g*255},${color.b*255})`

    console.log(color)

    const response = await fetch(`https://color-ai-api.herokuapp.com/check?r=${color.r}&g=${color.g}&b=${color.b}`)
    const json = await response.json()
    console.log(json[0])

    let temp = '';

    if(json[0] > 0.5) temp = 'hot'
    if(json[0] <= 0.5) temp = 'cold'

    hotOrCold.innerText = temp
}