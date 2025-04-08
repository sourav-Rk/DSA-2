class HashTable {
    constructor(capacity){
        this.loadFactor = 0.75
        this.capacity = capacity
        this.size = 0
        this.table = new Array(capacity)
    }

    //hashing function
    hash(key){
        let total = 0
        for(let i =0; i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.capacity
    }

    //to set a key value pair
    set(key,value){
        if((this.size / this.capacity) >= this.loadFactor) this.rehash()
        
        let index = this.hash(key)
        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
            this.size++
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
        return
    }

    //to get a value by its key
    get(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return console.log(sameKeyItem[0],"->",sameKeyItem[1])
            }
        }
        return console.log("no element found")
    }

    //to remove a element
    remove(key){
        const index = this.hash(key)
        let bucket = this.table[index]

        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
        return console.log("no element found")
    }

    //to display the element
    display(){
        for(let i=0 ; i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

    //rehash function
    rehash(){
        this.capacity = this.capacity * 2
        this.size = 0
        this.oldTable = this.table
        this.table = new Array(this.capacity)

        for(let bucket of this.oldTable){
            if(bucket){
                for(let item of bucket){
                    this.set(item[0],item[1])
                }
            }
        }
    }
}