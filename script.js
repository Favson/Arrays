// var allStudent = ['Christian', 'Christianah', 'Johnson', 'Sola','Fortunate']
// console.log(allStudent);

// var cart = ['Milo', 'Golden Morn', 'Cornflakes', 'Milk', 'Bottle Water', 'Bags', 'Phones', 'Pc']

// cart.pop() to delete the last element in the array
// cart.shift() to delete the first item in the array
// cart.push('Adunni') to add to the back of the array
// cart.unshift('Precious') to add an item to the front of the array

// console.log(cart);

var items = []
var prices=[]
function updateGMTTime() {
  const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
  dateshow.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);



function addItems() {
    if (inpt.value === "" || price.value===""){
        noItems.style.display = 'none';
        err.style.display= "block";
    }else{
        setTimeout(()=> {
            err.style.display="none"
        }, 5000);
        noItems.style.display = "none";
        myTable.style.display = "block";
        items.push(inpt.value)
        prices.push(price.value)
        document.getElementById("inpt").value =""
        document.getElementById("price").value=""
        carts()
    }
    // inputForEdit.style.display = "None"

}

function addItemstoFirst() {
    var value =prompt("Input The Item to add to the begining")
    if (isNaN(value)) {
        items.unshift(value)
        // prices.unshift()
        document.getElementById("inpt").value =""
        carts()
    }else{

    }
}

function removeFirstItems() {
        items.shift()
        prices.shift()
        document.getElementById("inpt").value =""
        document.getElementById("price").value=""
        carts()
}

function deletelastItems() {
    items.pop()
    prices.pop()
    document.getElementById("inpt").value =""
    carts()
}

function deleteAnyItems(){
    var ask = Number(prompt("Input the index of the of the"))
    if(items.length >0 || prices.length >0) {
        items.splice(ask-1, 1)
        prices.splice(ask-1,1)
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
    if (inpToedit == "" || inpToReplace == ""){
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
    // items.splice(items) 
    // show.innerHTML = ""
}

function carts(){
    countings.innerHTML= items.length
    show.innerHTML = ""
    for (x=0; x<items.length && x<prices.length; x++) {
        // <thead style="background-color:darkgrey">
        //     <tr>
        //         <th scope="col">S/N</th>
        //         <th scope="col">Products</th>
        //         <th scope="col">Actions</th>
        //     </tr>
        // </thead>
        show.innerHTML +=`
            <tr style="background-color: grey;">
                <td style="background-color: lightgray;"><p>${x+1}.</p></td>
                <td style="background-color: lightgray;"><p>${items[x]}</p></td>
                <td style="background-color: lightgray;"><p>#${prices[x]}</p></td>
                <td style="background-color: lightgray;"><button onclick="Delete(${x})" class="btn btn-danger">Delete</button> <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning"><i class="fa-regular fa-pen-to-square fw-5"></i>
                </button></td>
            </tr>
        `
    }
}

function Delete(index){
    noItems.style.display ="block"
    myTable.style.display = "none"
    items.splice(index, 1);
    prices.splice(index,1);
    carts()
}


