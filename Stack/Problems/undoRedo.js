class Editor {
    constructor(){
        this.undoStack = []
        this.redoStack = []
    }

    perform(action){
        this.undoStack.push(action)
        this.redoStack = []
        console.log(`performded : ${action}`)
    }

    undo(){
        if(this.undoStack.length ===0){
            console.log("nothing to redo")
            return
        }
        const lastAction = this.undoStack.pop()
        this.redoStack.push(lastAction)
        console.log(`undo : ${lastAction}`)
    }

    redo(){
        if(this.redoStack.length === 0){
            console.log("nothing to redo")
            return
        }

        const lastAction = this.redoStack.pop()
        this.undoStack.push(lastAction)
        console.log(`performed : ${lastAction}`)
    }

    showStacks(){
        console.log(this.undoStack)
        console.log(this.redoStack)
    }
}

const editor = new Editor();
editor.perform("Type A");
editor.perform("Type B");
editor.perform("Type C");
editor.undo(); // removes C
editor.undo(); // removes B
editor.redo(); // brings back B
editor.showStacks();