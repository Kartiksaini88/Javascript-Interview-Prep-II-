// example code
function throttler(fn,delay){
    // write code here
  let last = 0
   return (...props)=>{
    let now = new Date().getTime()
    if(now - last < delay){
      return
    }
    last = now
    console.log(last)
    return fn(...props)
   }
}

document.getElementById("my-btn").addEventListener("click",throttler((e)=>{
console.log("Clicked")
},1000))
