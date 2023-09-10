let catalogWrapper = document.getElementById('catalog-wrapper')
   

const cart = new Cart(JSON.parse(localStorage.getItem('product')))
    

window.onload =()=>{
    getProductFromAPI()   
    .then(()=> {
        renderCatalog(catalogWrapper, Product.all, 1, 4, (productID)=>{cart.addToCart(productID)})
    })

    renderCart()
    
}


// Load paginator 
let page = 1 
function render(){
    page++
    renderCatalog(catalogWrapper, Product.all,  page )
  
  
}

showCatalog.addEventListener('click', render)


