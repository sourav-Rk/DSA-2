class HashTable {
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    //hashing function one
    hash1(key){
       let total = 0
       for(let i = 0; i<key.length; i++){
         total+=key.charCodeAt(i)
       }
       return total % this.size
    }

    //hashing function two
    hash2(key){
        let total = 0
        for(let i = 0 ;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return 1 + (total + (this.size -1))
    }

    //to set a key value pair
    set(key,value){
        let index = this.hash1(key)
        let stepSize = this.hash2(key)
        let i = 0

        while(this.table[(index + i * stepSize)%this.size] && this.table[(index + i * stepSize)% this.size].key !==key){
            i++
            if(i===this.size){
                return console.log("hash table is full")
            }
        }
        this.table[(index + i * stepSize) % this.size] = {key,value}
    }

    //to get the value using the pair
    get(key){
        let index = this.hash1(key)
        let stepSize = this.hash2(key)
        let i = 0

        while(i < this.size){
            let pos = (index + i * stepSize) % this.size
            let slot = this.table[pos]

            if(slot.key === key){
                return console.log(slot.value)
            }
            i++
        }
        return console.log("element not found")
    }

    //to remove a key value pair from the table
    remove(key){
        let index = this.hash1(key)
        let stepSize = this.hash2(key)
        let i = 0

        while(i < this.size){
            let pos = (index + i * stepSize) % this.size
            let slot = this.table[pos]

            if(slot.key === key){
                return this.table[pos] = undefined
            }
            i++
        }
        return console.log("element not found")
    }

    //to display the elements
    display(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i].key,":",this.table[i].value)
            }
        }
    }

}