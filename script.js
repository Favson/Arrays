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
        show.innerHTML='<h3 class="text-center" style="color:grey;">Space cannot be empty</h3>'
    }else{
        items.push(inpt.value)
        document.getElementById("inpt").value =""
        show.innerHTML = ""
        for (x=0; x<items.length; x++) {
            show.innerHTML +=`<p>${x+1}. ${items[x]} </p>` 
        }
    }
}