const getProductFromAPI = () =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                let products = json.map( data => new Product(
                    data.id,
                    data.title,

                    // HW 2 : make it so the price is an object of type Money

                    data.price = new Money(data.price, "USD"),
                    data.description,
                    data.category,
                    data.image,

                    // HW1 : includ Rating object
                    data.rating = new Rating(data.rating.rate, data.rating.count)
                ) )
                Product.all = products
                console.log(products)
            })
}


const renderCatalog = () => {
    

    for(let i=0; i <= Product.all.length; i++){
        createCard(i)
    }
}