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
        renderCatalog(catalogWrapper, Product.all, 1, 4, (productID, srcImage,title)=>{cart.addToCart(productID, srcImage, title)},(imageSrc, producTitle)=>{cart.renderCart(imageSrc, producTitle)})
    })
    
    cart.saveCart()
    
    
}


// Load paginator 
let page = 1 
function render(){
    page++
    renderCatalog(catalogWrapper, Product.all,  page, 4, (productID,srcImage,title)=>{cart.addToCart(productID, srcImage, title)},(imageSrc, producTitle)=>{cart.renderCart(imageSrc, producTitle)}   )
  
  
}

itemCart.addEventListener('click', toggleCart)

showCatalog.addEventListener('click', render)
