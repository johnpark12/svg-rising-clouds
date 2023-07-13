let colorList = ["#FEC8D8", "black", "lightblue", "#98E690"]
let colorIndex = 2

function rn(from, to) {
    return parseInt(Math.random() * (to - from + 1)) + from;
}

function rs() {
    return arguments[rn(1, arguments.length) - 1];
}

function addClouds() {
    const numberOfClouds = 5;
    // For normal cloudgroups
    document.querySelectorAll(".cloudGroup>.sky").forEach(sky=>{
        for (let i = 0; i < numberOfClouds; i++){
            let cloud = gencloud()
            sky.appendChild(cloud)    
        }
    })
    // For startend
    let startendList = []
    for (let i = 0; i < 3; i++){
        let cloudList = []
        for (let j = 0; j < numberOfClouds; j++){
            let cloud = gencloud()
            cloudList.push(cloud)
        }    
        startendList.push(cloudList)
    }
    document.querySelectorAll(".startend").forEach(startend=>{
        let skyList = startend.querySelectorAll(".sky")
        for (let i = 0; i < 3*numberOfClouds; i++){
            let sky = skyList[Math.floor(i/5)]
            let cloud = startendList[Math.floor(i/5)][i%5].cloneNode()
            sky.appendChild(cloud)
        }
    })
}

window.addEventListener('load', () => {
    addClouds()
}); 
window.addEventListener("click", ()=>{
    colorIndex = (colorIndex+1)%colorList.length;
    document.querySelector(".frame").style.backgroundColor = colorList[colorIndex]
})

// Should have more colors like shades of gray.
function gencloud(){
    let cloud = document.createElement("div")
    cloud.classList.add("cloud")
    let cloudWidthMax = 20;
    let cloudHeightMax = 20;
    cloud.style.width = `${rn(2,cloudWidthMax)}%`
    cloud.style.height = `${rn(2,cloudHeightMax)}%`
    // transform: translate(-100%,-100%);
    cloud.style.boxShadow = `${ rn(cloudWidthMax, cloudWidthMax+120) }vw ${ rn(1, 100) }vh ${ rn(20, 40) }vmin ${ rn(1, 20) }vmin #fff`
    cloud.style.position = "absolute";
    cloud.style.left = `-${cloudWidthMax+20}%`;
    return cloud
}