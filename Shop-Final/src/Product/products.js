const getProductFromAPI = () =>{
    return fetch('https://fakestoreapi.com/products')
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
                //  console.log(products)
             })
 }
 
 
 const renderCatalog = (parentElement, products, page=1, perPage=4, addToCartCallBack, renderCartcall) => {
 
     products
         .slice ((page-1)* perPage, (page-1)* perPage + perPage )
         .forEach(product => {
             let cardDiv = createElement('article','card')
             cardDiv.classList.add("col-lg-3")
 
             let image = createElement('img', "image")
             image.src=product.image
             cardDiv.appendChild(image)
 
             let category = createElement('h3' , "category")
             category.innerText = product.category
             cardDiv.appendChild(category)
 
             let title = createElement('h2', 'title')
             title.innerText = product.title
             cardDiv.appendChild(title)
 
             let description = createElement('p','description')
             description.innerText = product.description
             cardDiv.appendChild(description)
 
             let price = createElement('div','price')
             price.innerText = product.price.amount
             let priceCurrency = createElement('span', "currency")
             priceCurrency.innerText = "/USD"
             price.appendChild(priceCurrency)
             cardDiv.appendChild(price)
 
             let rating = createElement('div', "rating")
 
             let rate = createElement('span')
             rate.innerText = product.rating.rate
             
             let star = createElement('i')
             star.classList.add("fa-solid", "fa-star")
             star.style="color: #fbf432; padding-right: 1rem;"
             rate.appendChild(star)
 
             let count = createElement('span')
             count.innerText = '('+ product.rating.count + ')'
             rate.appendChild(count)
 
             rating.appendChild(rate)
 
             cardDiv.appendChild(rating)
 
             let addCart = createElement('button')
             addCart.classList.add('btn',"btn-info","btn-custom") 
             addCart.innerText = 'Add to Cart'
             cardDiv.appendChild(addCart)
 
             addCart.addEventListener("click", ()=>{addToCartCallBack(product.id, product.image, product.title)})
             addCart.addEventListener('click',()=>{renderCartcall(product.image, product.title)} )
             
            //  nominal cart
             let nominal = document.querySelector(".nominal")
             
             if(localStorage.getItem('product') != null){
                nominal.innerText = JSON.parse(localStorage.getItem('product')).length

                
             } else {
                nominal.innerText = '0'
             }
             parentElement.appendChild(cardDiv)
 
         })
                         
         
 
 }

 

 