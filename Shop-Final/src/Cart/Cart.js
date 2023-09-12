class Cart {
    
    constructor(cartStorage){
        this.items = cartStorage

        } 
       

    
    
    
    
    addToCart(productID, quantity = 1){   
        let arr

        if(localStorage.getItem('product') != null){
            arr = JSON.parse(localStorage.getItem('product')) 

             arr.push({
                itemsID: productID,
                quantity: quantity
            })
        }
        
        
        
        this.items.push(
            {
                itemsID: productID,
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
}