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
    
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){ // regular expression for email
            if(email.length >= 2){
                this.email = email
            } else{
                console.error ("ERROR : Email must be at least two characters")
            }
        } else {
            console.error ( "ERROR : Must be respected email rules(email@.example)")
        }         
        
      
       if(typeof password == "string"){                     // type of string
            if(password != "") {                            // is not emtpy
                if (password.length >= 8){                  // >= 8 character
                    if(/[A-Z]/.test(password)){             // check UpperCase
                        if(/[a-z]/.test(password)) {        // check LowerCase
                            if(/[0-9]/.test(password)){     // Check number
                                this.password = password
                            }else {
                                console.error("ERROR: the password password must contain numbers")
                           }
                        }else {
                            console.error("ERROR:  the password must contain small letters")
                       }
                    }else {
                        console.error("ERROR: the password password must contain capital letters")
                   }
                } else {
                    console.error("ERROR: the password must be 8 characters ")
               }
            }    else {
                console.error("ERROR: the password should NOT Empty")
           }
         } else {
            console.error("ERROR: the type of the password should be String")
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
