// var allStudent = ['Christian', 'Christianah', 'Johnson', 'Sola','Fortunate']
// console.log(allStudent);

// var cart = ['Milo', 'Golden Morn', 'Cornflakes', 'Milk', 'Bottle Water', 'Bags', 'Phones', 'Pc']

// cart.pop() to delete the last element in the array
// cart.shift() to delete the first item in the array
// cart.push('Adunni') to add to the back of the array
// cart.unshift('Precious') to add an item to the front of the array

// console.log(cart);

var items = []

function addItems() {
    if (inpt.value === ""){
        err.style.display= "block"
        noItems.style.display = 'none'
    }else{
        err.style.display= "none"
        items.push(inpt.value)
        document.getElementById("inpt").value =""
        carts()
    }
}

function addItemstoFirst() {
    if (isNaN(inpt.value)) {
        items.unshift(inpt.value)
        document.getElementById("inpt").value =""
        carts()
    }else{
        err.style.display = "block"
        noItems.style.display = "none"
    }
}

function removeFirstItems() {
        items.shift()
        document.getElementById("inpt").value =""
        carts()
}

function deletelastItems() {
    items.pop()
    document.getElementById("inpt").value =""
    carts()
}

function deleteAnyItems(){
    var ask = Number(prompt("Input the index of the of the"))
    items.splice(ask-1, 1)
    carts()

}

function editItems() {
    inputForEdit.style.display="none"?"Block":"none";
    var inpToedit = Number(document.getElementById("inputToDelete").value)
    var inpToReplace = Number(document.getElementById("inputToReplace"))

    items.splice(inputForEdit, 1, inpToReplace)

}

function deleteAllItems(){
    show.innerHTML = ""
}

function carts(){
    show.innerHTML = ""
    for (x=0; x<items.length; x++) {
        show.innerHTML +=`<p>${x+1}. ${items[x]} </p>` 
    }
}


