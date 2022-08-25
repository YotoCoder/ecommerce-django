class Local{
	constructor(key){
		this.key = key
		this.item = this.get()

		if(this.item === null){
			this.set([])
		}
	}

	set(value){
		localStorage.setItem(this.key, JSON.stringify(value))
	}

	get(){
		return JSON.parse(localStorage.getItem(this.key))
	}

	add(value){
		let data = this.get()
		data.push(value)
		this.set(data)
	}

	delete(id){
		let list = this.get()
	    for(var i = list.length - 1; i>=0 ;i--){
	        if(list[i].id == id)
	            list.splice(i, 1);
	    }
	   	this.set(list)
	}
}
let cart = new Local('items')


function addToCar(obj){
	
}



function createItem(item){
	const container = document.createElement('div')
	container.classList.add('product-widget')
	container.innerHTML = 
	`
						<div class="product-img">
                            <img src=${item.img} alt="">
                        </div>
                        
                        <div class="product-body">
                            <h3 class="product-name"><a href="/product-detail/${item.id}">${item.name}</a></h3>
                            <h4 class="product-price"><span class="qty">${item.qty}x</span>$ ${item.price}</h4>
                        </div>
                        
                        <button class="delete" value="${item.id}"><i class="fa fa-close"></i></button>


	`;

	container.querySelector('button').addEventListener('click', function(){
		cart.delete(item.id)
		renderCart()
		container.remove()
	});

	return container
}

function renderCart(){

	let qty_ext = document.getElementById('qty-ext')

	let sum = 0;
	let total = document.getElementById('sub-total')

    var cartList = document.getElementById('cart-list');
	cartList.innerHTML = ''

	let items = cart.get()

    items.forEach(item => {
		product = createItem(item)
		cartList.appendChild(product)

		sum += parseFloat(item.price);

    });

	total.innerHTML = `SUBTOTAL: $ ${sum}`
	qty_ext.innerHTML = `${items.length}`

};

let carrito = document.querySelector("#cart");

let dropdown = document.querySelector('.cart-dropdown')

const background = document.querySelector("#background-invisible")


carrito.addEventListener("mouseover", () =>{

    carrito.classList.add('open')
    background.classList.remove("hide")
    
})

carrito.addEventListener("mouseout", () =>{

    carrito.classList.remove('open')
    background.classList.add("hide")
    
})


document.addEventListener("load", renderCart());