/*


    let head = {
            glasses: 1
        };

        let table = {
            pen: 3
        };

        let bed = {
            sheet: 1,
            pillow: 2
        };

        let pockets = {
            money: 2000
        };

    С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. 
    
    Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

    Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
    
    При необходимости составьте цепочки поиска и сравните их.
*/

let head = {
    glasses: 1
    
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:head
  };


//   pockets.glasses > pockets>bed>table>head.glases   = 1 
/*
  +------------<head>-----------------+
  +                                   +
  +          glasses:1        <--------------------+             (3)   
  +-----------------------------------+            \
                \                                  \
                 \                                 \ 
  +------------<table>----------------+            \ 
  +                        +-----------------------+
  +           __proto__:head   <--------------+
  +-----------------------------------+       \
                \                             \
                \                             \                 (2)                
  +------------<bed>-------------=----+       \         
  +                        +------------------+           
  +          __proto__:table      <------------------+
  +-----------------------------------+              \ 
                \                                    \
                \                                    \          (1)
  +------------<pockets>--------------+              \
  +                                   +              \
  +           __proto__:bed           +---------------
  +-----------------------------------+



  head.glasses   = 1 
/*          \    
  +---------\---<head>-----------------+
  +         \                          +
  +          glasses:1                +                (1)   
  +-----------------------------------+            
                \                                  
                 \                                 
  +------------<table>----------------+            
  +                                   +
  +           __proto__:head          +
  +-----------------------------------+       
                \                             
                \                                           
  +------------<bed>-------------=----+             
  +                                   +
  +          __proto__:table          +
  +-----------------------------------+              
                \                                    
                \                                            
  +------------<pockets>--------------+              
  +                                   +              
  +           __proto__:bed           +-
  +-----------------------------------+

*/










/*
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

*/ 


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  // Add own property stomach
  stomach: [] 
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple




// -------------------------------------------------