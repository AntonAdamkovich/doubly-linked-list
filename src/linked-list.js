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
        return this._head ? this._head.data : this._head;
    }

    tail() {
        return this._tail ? this._tail.data : this._tail;
    }

    at(index) {
        return this.findByIndex(this._head, index).data;

        /*var currentNode = this._head;
        var currentNodeIndex = 0;

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                return currentNode.data;
            }
        }*/
    }

    insertAt(index, data) {

        var currentNode = this.findByIndex(this._head, index);
        var newNode = new Node(data);


        newNode.next = currentNode;
        newNode.prev = currentNode.prev;

        currentNode.prev.next = newNode;
        currentNode.prev = newNode;

        this.length++;


        /*var currentNode = this._head;
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

                this.length++;

                break;
            }
        }*/

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

        var currentNode = this.findByIndex(this._head, index);
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;

        this.length--;


        /*var currentNode = this._head;
        var currentNodeIndex = 0

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;

                this.length--;

                break;
            }
        }*/

        return this;
    }

    reverse() {
        var currentNode = this._head;


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

    findByIndex(head, index){
        var currentNode = head;
        var currentNodeIndex = 0;

        while(currentNode){
            if(currentNodeIndex != index){
                currentNode = currentNode.next;
                currentNodeIndex++;
            } else {
                return currentNode
            }
        }

    }

}

module.exports = LinkedList;
