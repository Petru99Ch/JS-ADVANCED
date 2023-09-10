class Cart {
    
    constructor(product){
       this.items = [product]

    }
    
    
    
    addToCart(productID, quantity = 1){       

        
        this.items.push(
            {
                itemsID: productID,
                quantity: quantity
            }
        )
        

        localStorage.setItem('product' , JSON.stringify(this.items))

        let nominal = document.querySelector(".nominal")
        nominal.innerText = this.items.length
        


    }
}