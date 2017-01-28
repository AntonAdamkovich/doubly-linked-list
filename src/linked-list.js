const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var newNode = new Node(data);
        this.length++;

        if(this._tail){
            this._tail.next = newNode;
            newNode.prev = this._tail;

            this._tail = newNode;

        } else {
            this._head = newNode;
            this._tail = newNode;
        }
    }

    head() {
        return this._head ? this._head.data : this._tail;
    }

    tail() {
        return this._tail ? this._tail.data : this._tail;
    }

    at(index) {
        var currentNode = this._head;
        var currentNodeIndex = 0;

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                return currentNode.data;
            }
        }
    }

    insertAt(index, data) {
        var currentNode = this._head;
        var currentNodeIndex = 0

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                var newNode = new Node(data);

                newNode.next = currentNode;
                newNode.prev = currentNode.prev;

                currentNode.prev.next = newNode;
                currentNode.prev = newNode;

                break;
            }
        }

        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
    }

    deleteAt(index) {
        var currentNode = this._head;
        var currentNodeIndex = 0

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;

                break;
            }
        }

        return this;
    }

    reverse() {
        var currentNode = this._head;
        var tmp;

        while(currentNode){
            break;
        }

        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        var currentNodeIndex = 0;

        while(currentNode){
            if(currentNode.data != data){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                return currentNodeIndex;
            }
        }

        return -1;
    }

    find(data, index){
        
    }
}

module.exports = LinkedList;
