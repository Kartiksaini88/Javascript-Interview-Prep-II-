
let users = [
  {
    id:1,
    name:"Alex",
  },
  {
    id:2,
    name:"Brandy"
  },
  {
    id:3,
    name:"Ashley"
  },
  {
    id:4,
    name:"Mercy"
  },
  {
    id:5,
    name:"Pablo"
  }
]



let input_value = document.getElementById("input")

function getvalue(){
  if(!input_value.value){
    return
  }
  users.push({
    name:input_value.value
  })
  append()
  
}

let time = ()=>{
  let timeid
  if(timeid){
    clearTimeout(timeid)
  }
   timeid=setTimeout(()=>{
    getvalue()
  },2000)
}

function append(){
  document.getElementById("user_div").innerHTML=""
  users.map((e)=>{
    let ul = document.createElement("ul")
  
    let li = document.createElement("li")
    li.innerText=e.name
  
    ul.append(li)
  
    user_div.append(ul)
  })
}

append()



