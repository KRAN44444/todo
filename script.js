let input = document.querySelector("input")
let clear = document.querySelector(".btn_1")
let finish = document.querySelector(".btn_2")
let ul = document.querySelector("ul")



input.onkeypress = function(event){
   if (event.keyCode == 13){
     console.log(event.keyCode);
     let li =  document.createElement("LI");
     let img = document.createElement("IMG")
     let span = document.createElement("SPAN")
     span.innerHTML = input.value
     img.setAttribute("src","garbage.svg")
     li.appendChild(img)
     li.appendChild(span)
     ul.appendChild(li)
     input.value = ""
   }
}
ul.onclick = function(event){
  let target = event.target;
  console.log(target)
  if (target.tagName === 'LI'){
    target.classList.toggle('line')
  }
}
clear.onclick = function(){
  ul.innerHTML = ""
}
finish.onclick = function(){
  let list = ul.querySelectorAll("li")
  for(let i = 0;i < list.length;i++){
    list[i].classList.add("line")
  }
}