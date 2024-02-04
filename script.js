// var allStudent = ['Christian', 'Christianah', 'Johnson', 'Sola','Fortunate']
// console.log(allStudent);

// var cart = ['Milo', 'Golden Morn', 'Cornflakes', 'Milk', 'Bottle Water', 'Bags', 'Phones', 'Pc']

// cart.pop() to delete the last element in the array
// cart.shift() to delete the first item in the array
// cart.push('Adunni') to add to the back of the array
// cart.unshift('Precious') to add an item to the front of the array

// console.log(cart);

var items = []
// var prices=[]
function updateGMTTime() {
  const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
  dateshow.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);



function addItems() {
    if (inpt.value === "" || price.value===""){
        noItems.style.display = 'none';
        err.style.display= "block";
        setTimeout(()=> {
            err.style.display="none"
        }, 3000);
    }else{
        noItems.style.display = "none";
        myTable.style.display = "block";
        var itemObj = {
            inputtin : inpt.value,
            prices: price.value
        }
        items.push(itemObj)
        // prices.push(price.value)
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
    for (x=0; x<items.length; x++) {
        // <thead style="background-color:darkgrey">
        //     <tr>
        //         <th scope="col">S/N</th>
        //         <th scope="col">Products</th>
        //         <th scope="col">Actions</th>
        //     </tr>
        // </thead>
        console.log(items);
        show.innerHTML +=`
            <tr style="background-color: grey;">
                <td style="background-color: lightgray;"><p>${x+1}.</p></td>
                <td style="background-color: lightgray;"><p>${items[x].inputtin}</p></td>
                <td style="background-color: lightgray;"><p>#${items[x].prices}</p></td>
                <td style="background-color: lightgray;"><button onclick="Delete(${x})" class="btn btn-danger">Delete</button> <button class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#staticBackdrop${x}"><i class="fa-regular fa-pen-to-square fw-5"></i>
                </button></td>
                <!-- Modal -->
                <div class="modal fade " id="staticBackdrop${x}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header text-info">
                                <h1 class="modal-title fs-5 text-center" id="staticBackdropLabel">MAKE CHANGES</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center text-info">
                                <p>Makesure your inputs are correct</p>
                                <div class="text-center alert p-1 my-1 alert-danger w-50 mx-auto" style="display:none;" id="err2">Space cannot be empty</div>
                                <div class="text-center alert p-1 my-1 alert-success w-50 mx-auto" style="display:none;" id="successMsg">Succefully Make Changes</div>
                                <input type="text" id="firstModalInput${x}" placeholder="Input input new item" class="col-12 my-3 shadow-none" autofocus>
                                <input type="number" id="secondModalInput${x}" placeholder="input the price of the new item" class="col-12 border-none">
                            </div>
                            <div class="modal-footer" id="editDiv">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="editButton(${x})">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        `
    }
}


function Delete(index){
    items.splice(index, 1);
    carts()
}

function editButton(x){
    if ( document.getElementById(`firstModalInput${x}`).value === "" || document.getElementById(`secondModalInput${x}`).value === ''){
        err2.style.display = 'block'
        setTimeout(()=>{
            err2.style.display='none'
        }, 1000)
    }else{
        items[x]["inputtin"] = document.getElementById(`firstModalInput${x}`).value
        items[x]["prices"] = document.getElementById(`secondModalInput${x}`).value
        carts()
        alert("Successfully Updated")
        successMsg.style.display= 'block'
        setTimeout(() => {
            successMsg.style.display='none'
        }, 1000);
        document.getElementById(`firstModalInput${x}`).value = ''
        document.getElementById(`secondModalInput${x}`).value = ''
    }
}