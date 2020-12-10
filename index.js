/*function increment(){
  let countElement = document.getElementById("count");
  let currentcount = parseInt(countElement.innerText);
  let updatedcount = currentcount + 1;
 countElement.innerText = updatedcount;
}

function decrement(){
 let countElement = document.getElementById("count");
 let currentcount = parseInt(countElement.innerText);
 let updatedcount = currentcount - 1;
countElement.innerText = updatedcount;
}*/
  

/*function addElement(){
  const container = document.getElementById("container");
  let newElement = document.createElement("h1");
  newElement.innerText = "hi ths is AMEEN";
  console.log(newElement);
  container.appendChild(newElement);
}*/
/*function addElement(){
  const InputBox = document.getElementById("input");
  const container = document.getElementById("container");
  let newElement = document.createElement("p");
  newElement.innerHTML=InputBox.value;
  console.log(newElement);
  container.appendChild(newElement);
}*/
function addElement(){
  const InputBox = document.getElementById("input");
  const container = document.getElementById("container");
  let newElement = document.createElement("p");
  let removeElement = newElement.setAttribute("onclick","removeItem(this)" )
  newElement.innerHTML=InputBox.value;
  console.log(newElement);
  container.appendChild(newElement);
}
function removeItem(hi){
  const container = document.getElementById("container");
  container.removeChild(hi)
}