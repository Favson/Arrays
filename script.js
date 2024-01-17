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
    }
    // inputForEdit.style.display = "None"

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
    countings.innerHTML= items.length
    show.innerHTML = ""
    for (x=0; x<items.length; x++) {
        // <thead style="background-color:darkgrey">
        //     <tr>
        //         <th scope="col">S/N</th>
        //         <th scope="col">Products</th>
        //         <th scope="col">Actions</th>
        //     </tr>
        // </thead>
        show.innerHTML +=`

            <tr style="style="background-color:lightgrey"">
                <td><p>${x+1}.</p></td>
                <td><p>${items[x]}</p></td>
                <td><button onclick="Delete(${x})" class="btn btn-danger">Delete</button> <button onclick="edit(${x})" class="btn btn-warning"><i class="fa-regular fa-pen-to-square fw-5"></i>
                </button></td>
            </tr>
        `
    }
}

function Delete(index){
    items.splice(index, 1);
    carts()
}

function edit(editedItems){
    var askings= prompt("Input What The new item");
        items.splice(editedItems,1,askings)
        carts()
}
