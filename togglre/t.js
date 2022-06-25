
function outertxt(outervar){
    let bottom = "bottomside"
    return function innertxt(innervar){
        console.log("outervar -> "+ outervar)
        console.log("innervar -> "+ innervar)
        console.log("bottom -> " + bottom )
    }
}

let mainRootFunction = outertxt("outside")
mainRootFunction("inside")
