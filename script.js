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
        show.innerHTML = ""
        for (x=0; x<items.length; x++) {
            show.innerHTML +=`<p>${i+1}. ${items[i]} </p>` 
        }
    }
}