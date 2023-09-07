let catalogWrapper = document.getElementById('catalog-wrapper')
window.onload =()=>{
    getProductFromAPI()   
    .then(()=> {
        renderCatalog(catalogWrapper, Product.all, 1)
    })
    
}


// Load paginator 
let page = 1 
function render(){
    page++
    renderCatalog(catalogWrapper, Product.all,  page )
  
}

showCatalog.addEventListener('click', render)