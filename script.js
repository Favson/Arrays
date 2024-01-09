// var allStudent = ['Christian', 'Christianah', 'Johnson', 'Sola','Fortunate']
// console.log(allStudent);

// var cart = ['Milo', 'Golden Morn', 'Cornflakes', 'Milk', 'Bottle Water', 'Bags', 'Phones', 'Pc']

// cart.pop()
// cart.shift()
// cart.push('Adunni')
// cart.unshift('Precious')

// console.log(cart);

var items = []

function addItems() {
    if (inpt.value === ""){
        show.innerHTML='<h3 class="text-center" style="color:grey;">Space cannot be empty</h3>'
    }else{
        items.push(inpt.value)
        document.getElementById("inpt").value =""
        console.log(items)
        show.innerHTML += items
    }
}