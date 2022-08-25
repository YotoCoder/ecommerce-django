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

	if(obj.qty === null){
		let qty = parseFloat(document.getElementById('qty').value)
		obj.qty = qty
	}

	let carrito = cart.get()
	let match = false;
	console.log(obj)

	if(!carrito[0]) {
		
		console.log('Vacio agregando primer registro')
		cart.add(obj)

	}else {
		carrito.forEach(item => {
			if(item.id === obj.id){
				console.log('Ya existe, actualizando el elemento')
				match = true
				let qty_total = parseFloat(item.qty) + parseFloat(obj.qty)
				item.qty = qty_total
			}
		});

	}	

	cart.set(carrito)
    console.log(cart.get())

	if(!match){
		console.log('no existe agregando')
		cart.add(obj)
	}

	renderCart()
	
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

	let qty_out = 0;

    items.forEach(item => {

		if(item.qty > 1){

			let x = item.price * item.qty
			product = createItem(item)
			cartList.appendChild(product)

			sum += parseFloat(x);

			qty_out += item.qty

		}else{

			product = createItem(item)
			cartList.appendChild(product)

			sum += parseFloat(item.price);

			qty_out += item.qty
		}

    });


	total.innerHTML = `SUBTOTAL: $ ${sum}`
	qty_ext.innerHTML = `${qty_out}`

};


document.addEventListener("load", renderCart());