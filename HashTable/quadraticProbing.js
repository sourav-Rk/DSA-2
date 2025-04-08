class HashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }
    
    //function to hash
    hash(key){
        let total = 0;
        for(let i = 0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    //to set a key value pair
    set(key,value){
        let index = this.hash(key)
        let firstDeletedIndex = -1
        let i = 0

        while(i < this.size){
            let pos = (index + i**2) % this.size
            let slot = this.table[pos]

            if(slot === undefined){
                if(firstDeletedIndex !== -1){
                    this.table[firstDeletedIndex] ={key,value}
                }else{
                    this.table[pos] = {key,value}
                }
                return
            }

            if(slot === "deleted" && firstDeletedIndex !== -1){
                firstDeletedIndex = pos
            }

            if(slot !== "deleted" && slot.key === key){
                this.table[pos].value = value
                return
            }
            i++
        }

        if(firstDeletedIndex !== -1){
            this.table[firstDeletedIndex] = {key,value}
        }else{
           return console.log("table is full")
        }
    }

    //to get a value by the key
    get(key){
        let index = this.hash(key)
        let i = 0

        while(i < this.size){
            let slot = this.table[(index + i ** 2) % this.size]

            if(slot === undefined) break

            if(slot !== "deleted" && slot.key === key){
                return console.log(slot.value)
            }
            i++
        }
        return console.log("no element found")
    }

    //remove the key value pair
    remove(key){
        const index = this.hash(key);
        let i =0;
        while( i < this.size){
            let slot = this.table[(index + i **2) % this.size]
            if(slot !== "deleted" && slot.key === key){
                return slot = "deleted"
            }
            i++
        }
        return console.log("no element found")
    }

    //to display the elements
    display(){
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i] !== "deleted" && this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}