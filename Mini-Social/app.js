let user1 = new User("Johny", "johny99@example.com", "dsfsfD4sfassa")
let user2 = new User("Marry", "mary79@example.com", "FGSdda33")
let user3 = new User("Peter", "peter@example.com", "asd3452AD")



user1.addFriend(user2)
user1.addFriend(user3)

user1.removeFriend(user2)



console.dir(user1)
console.dir(user2)
console.dir(user3)