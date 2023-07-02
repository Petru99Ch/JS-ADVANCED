 class User {

    static users = [ ] // static  ---> class
    friends = [] // non-static ----> Own Prorpietes (dynamic)

    constructor(username, email, password) {

        // HW1: Validation  

        if(typeof username == "string" && username.length > 2   ){
            this.username = username
        } else {
            console.error("ERROR : Username must be at least two characters")
        }
    
        if(typeof email == "string" && email.length >= 6 &&  email.indexOf("@") < email.indexOf(".")  )  {
            this.email = email
        } else {
            console.error ( "ERROR : Username must be at least two characters and respected email rules(email@.example)")
        }         
        
        
        for(let i = 0; i < password.length; i++){
            if(typeof password == "string" && password.length >= 8 && password[i] == password[i].toUpperCase() || password[i] == password[i].toLowerCase()){
                this.password = password
            } else {
                // this.password = password
               console.error ( "ERROR : Username must be at least 8 characters")
            }   
        } 

        // register the user in the common users list

        User.users.push(this)
        
        
    }

    addFriend(user) {

        if(!this.friends.includes(user) && user instanceof User){
            this.friends.push(user)
            user.addFriend(this)
        } else { 
            console.error("ERROR: a User can add as friends only User type Objects")
        }
        
    }

    // HW 2 : Remove Friend

    removeFriend(user) {

        if(this.friends.includes(user)) {
            this.friends.splice(this.friends.indexOf(user), 1)
            user.removeFriend(this) 

        }
       

    }

    static getUserByUsername (username) {

        /*   old
        for(let i=0; i< User.users.length; i++){
            if(User.users[i].username == username){
                return User.users[i]
            }
        }*/

        // NEW

        let user = User.users.find(function(u){return u.username === username})
        return user

    }

    // HW3 : add the static method  getUserByEmail()

    static getUserByEmail (email) {
       return User.users.find(e => e.email === email )
    } 
}

