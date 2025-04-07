//linear probing

class HashTable {
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    //function to hash
    hash(key){
        let total = 0
        for(let i =0; i<key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    //to set the key value pair
    set(key,value){
        let index = this.hash(key)
        const originalIndex = index
        let firstDeletedIndex = -1

        while(this.table[index] !== undefined){
            const current = this.table[index]

            if(current === "deleted" && firstDeletedIndex === -1){
                firstDeletedIndex = index
            }

            else if(current.key === key){
               return this.table[index].value = value
            }

            index = (index + 1) % this.size
            if(index === originalIndex){
                console.log("table is full")
                return
            }
        }
        if(firstDeletedIndex !== -1){
            this.table[firstDeletedIndex] = {key,value}
        }else{
            this.table[index] = {key,value}
        }
    }

    //to get the value by using the key
    get(key){
        let index = this.hash(key)
        const originalIndex = index

        while(this.table[index]){
            if(this.table[index] !== "deleted" && this.table[index].key === key){
                return console.log(this.table[index].key + "->" + this.table[index].value)
            }

            index = (index + 1) % this.size

            if(index === originalIndex ) break
        }

        return console.log("no element found")
    }

    //to remove an element
    remove(key){
        let index = this.hash(key)
        const originalIndex = index

        while(this.table[index] !== "deleted" && this.table[index]){
            if(this.table[index].key === key){
               return this.table[index] = "deleted"
            }
            
            index = (index + 1) % this.size

            if(index === originalIndex) break
        }

        return console.log("no element found")
    }

    //to display the elements
    display(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i] && this.table[i] !== "deleted"){
                console.log(i ,this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set("name","sourav")
table.set("mane","sourav")
table.display()
table.get("mane")
