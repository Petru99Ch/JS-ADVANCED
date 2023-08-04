const randCoord = () => Math.random() * 100 //0 ... 10% 
const randTime = () =>-1 + Math.random() * 2 // -1 ... 1 
const randSize = () =>10 + Math.random() * 10

class Flake {

  static  all = []

  static renderAll (parentElement){
    // for(let i = 0; i<Flake.all.length; i++){
    //     Flake.all[i].render(parentElement)
    // }

    Flake.all.forEach(flake => flake.render(parentElement))
  }

  static updateAll (){
    for(let i = 0; i<Flake.all.length; i++){
        Flake.all[i].update()
    }
  }

    constructor (params) {
            this.top = params.top ?? -15
            this.left = params.left ?? randCoord()
            this.size = params.size  ?? 10
            this.opacity = params.opacity  ?? .8
            this.color = params.color ?? "#fff"

            this.duration = 40 / this.size + 5
            
            //remember the flake object in Array
            Flake.all.push(this)
    }

    render(parentElement) {
        let div  = document.createElement('div')
        div.className = 'flake'

        // save local shortcout to this div 
        this.div = div 
        parentElement.appendChild(div)

        this.div.addEventListener('animationend', () => {

          // remove the DIV from the DOM (view)
            this.div.parentElement.removeChild(this.div)

            // remove the flake from the Array
            Flake.all = Flake.all.filter(flake => flake != this)
        })  
    }

    update () {
        // update coordinates

        this.div.style.top = `${this.top}%`
        this.div.style.left = `${this.left}%`

        // update size
        this.div.style.width = `${this.size}px`
        this.div.style.height = `${this.size}px`

        // effects
        this.div.style.opacity = `${this.opacity}`
        this.div.style.backgroundImage = `radial-gradient(${this.color}, transparent)`

        // animation
        this.div.style.animation = `fall ${this.duration}s linear ${randTime()}s `

    }
}



//////////////////////////////////
let snow = document.querySelector('.snow')
setInterval(() => {
  let flake = new Flake({size: randSize(), color: 'white'})
  flake.render(snow)
  flake.update()
} , 50)
   



// setInterval(function(){
//     f1.top +=20
//     f1.update()}, 1000)