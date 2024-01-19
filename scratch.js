// var carts = ["hfhfhfh", 6, true, 'i am a guy']
// carts.shift()
// carts.pop()
// carts.unshift('Adunni')
// carts.push("Tofunmi")
// console.log(carts)

var items =[]
function addItems() {
    if(inpt.value === ""){
        err.style.display= "block";
    }else{
        setTimeout(()=> {
            err.style.display= "none";
        }, 5000)
        myTable.style.display = "block"
        items.push(inpt.value)
        carts()
        counting.innerHTML = items.length
   
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

// function removeFirstItems() {
//     items.shift()
//     carts()
// }

// function deleteAnyItems(){
//     var ask = Number(prompt("Input The number you want to delete"))
//     items.splice(ask-1, 1)
//     carts()
// }

function editItems() {
    var noToEdit = Number(prompt("Input no to edit"))
    var replaceItem =prompt("Input the item you want to replace it with")
    if (noToEdit === "" || replaceItem === ""){
        err.style.display= "block";
    }else{
        setTimeout(()=> {
            err.style.display= "none";
        }, 5000)
        items.splice(noToEdit-1, 1, replaceItem)
        carts()
    }
}
function deleteAllItems(){
    items.splice(0, items.length)
    carts()
    // items.splice(items) 
    // show.innerHTML = ""
}


function carts() {
    show.innerHTML=""
    counting.innerHTML= items.length
    for(i=0; i< items.length; i++){
        show.innerHTML +=`
            <tr>
                <td><p>${i+1}</p></td>
                <td><p>${items[i]}</p></td>
                <td><button class="btn btn-danger" onclick="del(${i})">Delete</button> <button class="btn btn-warning" onclick="editings(${i})">Edit</button></td>
            </tr>
        `
    }
}

function del(index){
    var confirmation = confirm("Are you sure you want to delete this item")
    if(confirmation){
        items.splice(index, 1)
        carts()
    }else{
        carts()
    }
}

function editings(index){
    var editToReplace=prompt("Input The Number To Replace")
    if (askings === "" || editToReplace.value===""){
        items.splice(index, 1, editToReplace)
    }
}