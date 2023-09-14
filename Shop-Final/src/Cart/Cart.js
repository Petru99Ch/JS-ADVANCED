class Cart {
    
    constructor(cartStorage){
        this.items = cartStorage

        } 
       

    
    
    
    
    addToCart(productID,srcImage, title ,quantity = 1){   
        let arr

        if(localStorage.getItem('product') != null){
            arr = JSON.parse(localStorage.getItem('product')) 

             arr.push({
                itemsID: productID,
                srcImage: srcImage,
                titleItemms: title,
                quantity: quantity
            })
        }
        
        
        
        this.items.push(
            {
                itemsID: productID,
                srcImage: srcImage,
                titleItemms: title,
                quantity: quantity
            }
        )
        
       
        if(localStorage.getItem('product') != null){
            localStorage.setItem('product' , JSON.stringify(arr))
        } else {
            localStorage.setItem('product' , JSON.stringify(this.items))
        }

        
        let nominal = document.querySelector(".nominal")
        nominal.innerText = this.items.length  
            
    }

    renderCart(imageSrc, producTitle, quantity = 1) {
        
        let showCart = document.createElement('div')
        showCart.classList.add('list-group','list-custom','list-position')
        let nav = document.querySelector("body > div > nav")
        nav.appendChild(showCart)
    
        let cart = document.querySelector("body > div > nav > div")

        
        let itemsCart = document.createElement('a')
        itemsCart.href="#"
        itemsCart.classList.add('list-group-item','list-custom') 



        let imageItem = document.createElement('img')       
            imageItem.src = imageSrc
    
        let titleItems = document.createElement('h2')
        titleItems.innerText = producTitle

        let quantityItems = document.createElement('p')
        quantityItems.innerText = "X "+ quantity



        itemsCart.appendChild(imageItem)
        itemsCart.appendChild(titleItems)
        itemsCart.appendChild(quantityItems)

        cart.appendChild(itemsCart)
          
       
        
        
          
     }

     saveCart(quantity=1){
        let showCart = document.createElement('div')
        showCart.classList.add('list-group','list-custom','list-position')
        let nav = document.querySelector("body > div > nav")
        nav.appendChild(showCart)
        let cart = document.querySelector("body > div > nav > div")

        let productStorage = JSON.parse(localStorage.getItem('product'))

        
            productStorage.forEach(product => {
                let itemsCart = document.createElement('a')
                itemsCart.href="#"
                itemsCart.classList.add('list-group-item','list-custom') 
    
    
    
                let imageItem = document.createElement('img')       
                    imageItem.src = product.srcImage
            
                let titleItems = document.createElement('h2')
                titleItems.innerText = product.titleItemms
    
                let quantityItems = document.createElement('p')
                quantityItems.innerText = "X "+ quantity
    
    
    
                itemsCart.appendChild(imageItem)
                itemsCart.appendChild(titleItems)
                itemsCart.appendChild(quantityItems)
    
                cart.appendChild(itemsCart)
           
       
            })
     }
}