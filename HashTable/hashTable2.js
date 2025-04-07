//Collision handling

class HashTable {
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    //hashing function
    hash(key){
        let total = 0
        for(let i = 0; i<key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    //to set the key value pair
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket = bucket.push([key,value])
            }
        }
    }

    //to get the key value pair
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            return sameKeyItem[1]
        }
        return undefined
    }

    //to remove the key value pair
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
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

const table = new HashTable(50)
table.set("name","sourav")
table.set("mane","kochu")
table.set("age",21)
table.set("place","kannur")
table.set("gea",19)
table.display()