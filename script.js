// var allStudent = ['Christian', 'Christianah', 'Johnson', 'Sola','Fortunate']
// console.log(allStudent);

// var cart = ['Milo', 'Golden Morn', 'Cornflakes', 'Milk', 'Bottle Water', 'Bags', 'Phones', 'Pc']

// cart.pop() to delete the last element in the array
// cart.shift() to delete the first item in the array
// cart.push('Adunni') to add to the back of the array
// cart.unshift('Precious') to add an item to the front of the array

// console.log(cart);

var items = []
function updateGMTTime() {
  const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
  dateshow.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);



function addItems() {
    if (inpt.value === ""){
        err.style.display= "block"
        noItems.style.display = 'none'
    }else{
        err.style.display= "none"
        items.push(inpt.value)
        document.getElementById("inpt").value =""
        carts()
        countings.innerHTML= items.length
    }
    inputForEdit.style.display = "None"

}

function addItemstoFirst() {
    var value =prompt("Input The Item to add to the begining")
    if (isNaN(value)) {
        items.unshift(value)
        document.getElementById("inpt").value =""
        carts()
    }else{

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
    if(items.length >0) {
        items.splice(ask-1, 1)
        carts()
    }else{
        console.log("Nothing");
    }
}

function editItems() {
    UpdateValue()
}
function UpdateValue() {
    modar.style.display=modar.style.display === "none" ? "block" : "none";
    let inpToedit = Number(document.getElementById("inputToDelete").value)
    let inpToReplace =(document.getElementById("inputToReplace").value)
    if (inpToedit == "" && inpToReplace == ""){
        display.innerHTML ="Input Values"
    }else{
        items.splice(inpToedit-1, 1, inpToReplace)
        carts()
    }
    (document.getElementById("inputToDelete").value)=""
    (document.getElementById("inputToReplace").value)=""
}
function closeButton(){
    modar.style.display= "none"
}

function deleteAllItems(){
    items.splice(0, items.length)
    carts()
    // show.innerHTML = ""
}

function carts(){
    show.innerHTML = ""
    for (x=0; x<items.length; x++) {
        show.innerHTML +=`
            <tr>
                <td><p>${x+1}.</p></td>
                <td><p>${items[x]}</p></td>
                <button onclick="Delete" class="btn btn-danger">Delete</button>
                <button onclick="edit" class="btn btn-warning">Edit</button>
            </tr>
        `
    }
}


