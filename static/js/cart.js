
function toCart(obj){

    itemsLocal = JSON.parse(localStorage.getItem('items'))

    if(itemsLocal.include(obj.id)){
        console.log('se encuentra')
        itemsLocal.qty += obj.qty;
    }else{
        obj.qty = document.getElementById('qty').value;
    }

	

    console.log(obj.qty);

    data = localStorage.setItem('items', JSON.stringify(obj));

    console.log(JSON.parse(localStorage.getItem('items')));

    renderCart()
};



function renderCart(){
    
    var cartList = document.getElementById('cart-list');

    let items = JSON.parse(localStorage.getItem('items'));

    let item = items;

    console.log(item);

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