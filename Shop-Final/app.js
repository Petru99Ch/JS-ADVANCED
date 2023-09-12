let catalogWrapper = document.getElementById('catalog-wrapper')


        let cartStorage
        if(JSON.parse(localStorage.getItem('product'))!=null){
            cartStorage = JSON.parse(localStorage.getItem('product'))
        } else {
            cartStorage = []
        }


const cart = new Cart(cartStorage)


window.onload =()=>{
    getProductFromAPI()   
    .then(()=> {
        renderCatalog(catalogWrapper, Product.all, 1, 4, (productID)=>{cart.addToCart(productID)})
    })
    
    
    
}


// Load paginator 
let page = 1 
function render(){
    page++
    renderCatalog(catalogWrapper, Product.all,  page, 4, (productID)=>{cart.addToCart(productID)}  )
  
  
}

showCatalog.addEventListener('click', render)
