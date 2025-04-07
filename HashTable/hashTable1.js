//A hash table which is also called a hash map is a data structure that is used to store key value pairs
//It lets you store data in a way that you can insert, access, and delete items very quickly — usually in constant time O(1).
//typically implemented where constant lookup and insertion are needed
// A hashing function is a special function that takes a key (string, number, etc.) and converts it into a fixed-size number (index).
// This index tells us where to store or find the value in a hash table.

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    //hashing function
    hash(key){
        const total = 0
        for(let i=0; i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    //to add a key value pair
    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    //to get the value using key
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    //to remove a key value pair
    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    //to display the elements
    display(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(40)
table.set("name","sourav")
table.set("place","kannur")
table.set("age",23)
table.display()