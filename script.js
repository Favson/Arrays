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
        alert('Space cannot be empty')
    }else{
        items.push(inpt.value)
        document.getElementById("inpt").value =""
        console.log(items)
        show.innerHTML += items
    }
}