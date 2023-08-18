//** */

class NodoDoble {
constructor(data) {
    this.data = data;      // Almacena el valor del nodo
    this.next = null;      // Referencia al siguiente nodo
    this.prev = null;      // Referencia al nodo anterior
}
}
//Clase de la lista doble
class ListaEnlazadaDoble {
constructor() {
    this.head = null;      // Puntero al primer nodo
    this.tail = null;      // Puntero al último nodo
}

// Agregar un nodo al final de la lista
append(data) {
    const nuevoNodo = new NodoDoble(data);
    if (!this.head) {
    this.head = nuevoNodo;
    this.tail = nuevoNodo;
    } else {
    nuevoNodo.prev = this.tail;
    this.tail.next = nuevoNodo;
    this.tail = nuevoNodo;
    }
}

// Agregar un nodo al principio de la lista
prepend(data) {
    const nuevoNodo = new NodoDoble(data);
    if (!this.head) {
    this.head = nuevoNodo;
    this.tail = nuevoNodo;
    } else {
    nuevoNodo.next = this.head;
    this.head.prev = nuevoNodo;
    this.head = nuevoNodo;
    }
}

// Insertar un nuevo nodo después de un valor objetivo...
insertAfter(targetData, newData) {
    const nuevoNodo = new NodoDoble(newData);
    let nodoActual = this.head;

    while (nodoActual !== null) {
    if (nodoActual.data === targetData) {
        nuevoNodo.prev = nodoActual;
        nuevoNodo.next = nodoActual.next;
        if (nodoActual.next) {
        nodoActual.next.prev = nuevoNodo;
        } else {
        this.tail = nuevoNodo;
        }
        nodoActual.next = nuevoNodo;
        break;
    }
    nodoActual = nodoActual.next;
    }
}

// Eliminar un nodo con un valor específico
delete(data) {
    let nodoActual = this.head;

    while (nodoActual !== null) {
    if (nodoActual.data === data) {
        if (nodoActual.prev) {
        nodoActual.prev.next = nodoActual.next;
        } else {
        this.head = nodoActual.next;
        }
        if (nodoActual.next) {
        nodoActual.next.prev = nodoActual.prev;
        } else {
        this.tail = nodoActual.prev;
        }
        break;
    }
    nodoActual = nodoActual.next;
    }
}

// Buscar un nodo con un valor específico
find(data) {
    let nodoActual = this.head;

    while (nodoActual !== null) {
    if (nodoActual.data === data) {
        return nodoActual;   // Devuelve el nodo si se encuentra
    }
    nodoActual = nodoActual.next;
    }

    return null;   // Retorna null si no se encuentra
}

// Mostrar los valores de los nodos en la lista
display() {
    const resultado = [];
    let nodoActual = this.head;

    while (nodoActual !== null) {
    resultado.push(nodoActual.data);
    nodoActual = nodoActual.next;
    }

    return resultado;
}

// Recorrer la lista y ejecutar una función en cada nodo
traverse(callback) {
    let nodoActual = this.head;

    while (nodoActual !== null) {
    callback(nodoActual.data);
    nodoActual = nodoActual.next;
    }
}
}

// Ejemplo de uso y verificacion
const listaDoble = new ListaEnlazadaDoble();
listaDoble.append(5);
listaDoble.append(10);
listaDoble.prepend(2);
listaDoble.insertAfter(5, 7);
listaDoble.delete(10);//Elimina el valor 10 
console.log(listaDoble.find(5));  // Debería mostrar el nodo con valor 5
console.log(listaDoble.display());  // Debería mostrar [2, 5, 7]
listaDoble.traverse((data) => console.log(data));  // Debería mostrar 2, 5, 7

// Desarrollado por: Yael Mauricio Cano Palacio