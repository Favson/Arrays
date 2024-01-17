// var carts = ["hfhfhfh", 6, true, 'i am a guy']
// carts.shift()
// carts.pop()
// carts.unshift('Adunni')
// carts.push("Tofunmi")
// console.log(carts)

var items =[]
function addItems() {
    if(inpt.value === ""){
         console.error("Input Value jhoor");
    }else{
        items.push(inpt.value)
        carts()
    }
    document.getElementById("inpt").value=""
}

function addItemstoFirst() {
    if(inpt.value === ""){
        console.error("Input Value jhoor");
   }else{
       items.unshift(inpt.value)
        carts()
   }
   document.getElementById("inpt").value=""
}

function removeFirstItems() {
    items.shift()
    carts()
}

function deleteAnyItems(){
    var ask = Number(prompt("Input The number you want to delete"))
    items.splice(ask-1, 1)
    carts()
}

function editItems() {
    var noToEdit = Number(prompt("Input no to edit"))
    var replaceItem =prompt("Input the item you want to replace it with")
    items.splice(noToEdit-1, 1, replaceItem)
    carts()
}


function carts() {
    show.innerHTML=""
    for(i=0; i< items.length; i++){
        show.innerHTML +=`<p>${i+1}. ${items[i]} </p>`
    }
}