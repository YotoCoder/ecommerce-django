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
   
    cart.add(obj)
    console.log(cart.get())
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
		container.remove()
	});

	return container
}

function renderCart(){

    var cartList = document.getElementById('cart-list');

    let items = cart.get()

    //console.log(item);

	cartList.remove()

    items.forEach(item => {
		product = createItem(item)
		cartList.appendChild(product)
    });

};


document.addEventListener("load", renderCart());