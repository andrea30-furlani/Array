class pilha {
 constructor()   {
    this.items = [];
 }

 push(element) {
    this.items.push(element); // push = adiciona na pilha
 }

pop() {
    return this.items.pop(); //pop = retira da pilha
    }

peek() {
    return this.items[this.items.length - 1]; // mostra a posição do último elemento
    }

qualeoprimeiro(){
    return this.items[0];
}

totalElementos(){
    return this.items.length;
}

size(){
    return this.items.length; // mostra o tamanho
}

isEmpty() { // verifica se a pilha está em branco (vazio)
    return this.items.length === 0;
}

compararPilha(pPilha1, pPilha2){ // comparar uma pilha com a outra
    return (pPilha1.size() == pPilha2.size());
}

}

const p = new pilha(); 

p.push(10)
p.push(5)
p.push(15)
console.log(p);
console.log('valor do ultimo elemento: ' , p.peek());

p.pop()
console.log(p);
console.log('valor do ultimo elemento: ' , p.peek());
console.log('valor do ultimo elemento: ' , p.isEmpty());

console.log('valor do primeiro elemento: ' , p.qualeoprimeiro());




console.log(pilha)