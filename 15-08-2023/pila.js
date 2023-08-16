/* Ejercicios 6  */ 
class node{
    constructor(value){
        this.value = value;
        this.next = null;       
    }
}

class stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    isEmpty(){
        return this.items.length
    }
    push(value){
        const newNode = new node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            return "la pila esta vacia";
        }
        return this.items.pop();
    }
    peel(){
        if(this.isEmpty()){
            return "la pila esta vacia";
        }
        return this.items[this.items.length - 1];

    }
}
const stack = new stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
stack