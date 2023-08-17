class node{
    constructor(data){
        this.data = data;
        this.next = null;

    }
}
class ListEnlaza{
    constructor(){
        this.head = null;
    }

    agregar(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next=newNode;
        }
    }
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data){
        if(!this.head){
            this.head = newNode;
            return;
        }
        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
        
    }
    display(){//Mostrar cabeza
        let current = this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    
}
const lista = new ListEnlaza();
lista.agregar(1);
lista.agregar(2);
lista.agregar(3);
lista.delete(2);
lista.display();