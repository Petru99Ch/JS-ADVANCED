function  createCard(index){
    section = document.getElementById('catalog-wrapper')


    let article = document.createElement("article")
    article.classList.add('card', col-lg-3,'col-md-6') 

    

    let image = document.createElement('img')
    image.src = Product.all[index].image
    image.className ='image' 
    image.alt = index

    let imageContainer = document.createElement('div')
    imageContainer.className = 'image-container'
    imageContainer.appendChild(image)

    let category = document.createElement('h3')
    category.className = 'category'
    category.innerText = Product.all[index].category + '/'

    let title = document.createElement('h2')
    title.className = 'title'
    title.innerText = Product.all[index].title

    let description = document.createElement('p')
    description.className ='description'
    description.innerText = Product.all[index].description

    let price = document.createElement('div')
    price.className = 'price'
    price.innerText = Product.all[index].price.amount

    let currency = document.createElement('span')
    currency.innerText = "/USD"
    currency.className = 'currency'
    price.appendChild(currency)

    let rating = document.createElement('div')
    rating.className = 'rating'

    let rate = document.createElement('span')
    rate.innerText = Product.all[index].rating.rate +'/5'
    let star = document.createElement('i')
    star.classList.add("fa-solid", "fa-star")
    star.style="color: #fbf432; padding-right: 1rem;"
    rate.appendChild(star)
    let count = document.createElement('span')
    count.innerText = '('+ Product.all[index].rating.count + ')'
    
    let addCart = document.createElement('button')
    addCart.classList.add('btn',"btn-info","btn-custom") 
    addCart.innerText = 'Add to Cart'




    rating.appendChild(rate)
    rating.appendChild(count)

  
    article.appendChild(imageContainer)
    article.appendChild(category)
    article.appendChild(title)
    article.appendChild(description)
    article.appendChild(price)
    article.appendChild(rating)
    article.appendChild(addCart)

    section.appendChild(article)
}




