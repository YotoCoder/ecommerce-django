
function toCart(obj){

    let carrito = []

    var storage = JSON.parse(localStorage.getItem('items'))


    if(carrito){
        console.log('existe carrito')

        carrito.push({uno:'1'})

        console.log(`carrito:${carrito}`)



    }else{
        console.log('No existe carrito')

    }

    


   

    // console.log(obj.qty);

    // var itemsLocal = JSON.parse(localStorage.getItem('items'))
    
    


    if(obj.qty != 1){
        obj.qty = document.getElementById('qty').value;
    }

   

    data = localStorage.setItem('items', JSON.stringify(obj));

    //console.log(JSON.parse(localStorage.getItem('items')));

    renderCart()
};



function renderCart(){


    var cartList = document.getElementById('cart-list');

    let items = JSON.parse(localStorage.getItem('items'));

    let item = items;

    //console.log(item);

    cartList.innerHTML = 
    `
            <div class="product-widget">

            <div class="product-img">
                <img src=${item.img} alt="">
            </div>
            
            <div class="product-body">
                <h3 class="product-name"><a href="/product-detail/${item.id}">${item.name}</a></h3>
                <h4 class="product-price"><span class="qty">${item.qty}x</span>$ ${item.price}</h4>
            </div>
            
            <button class="delete" value="${item.id}"><i class="fa fa-close"></i></button>
            
            </div>
    
    `;
};


document.addEventListener("load", renderCart());