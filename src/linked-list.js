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

        return this;
    }

    head() {
        return this._head ? this._head.data : this._head;
    }

    tail() {
        return this._tail ? this._tail.data : this._tail;
    }

    at(index, flag) {
        var nodeAtIndex = this._head;
        var nodeIndex = 0;

        while(nodeAtIndex){
            if(index != nodeIndex){
                nodeAtIndex = nodeAtIndex.next;
                nodeIndex++;
            } else {
                return flag ? nodeAtIndex : nodeAtIndex.data;
            }
        } 
    }

    insertAt(index, data) {
        var currentNode = this.at(index, true) || this._tail;
        
        if(currentNode){
            var newNode = new Node(data);
            
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;

            currentNode.prev.next = newNode;
            currentNode.prev = newNode;

            this.length++;
        } else {
            this.append(data);
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

        return this;
    }

    deleteAt(index) {
        var removableNode = this.at(index, true) || this._tail;

        if(removableNode && this.length > 1){
            removableNode.prev.next = removableNode.next;
            removableNode.next.prev = removableNode.prev;

            this.length--;
        } else {
            this.clear();
        }
        
        return this;
    }

    reverse() {
        var currentNode = this._head;
        var temp;

        while(currentNode){
            temp = currentNode.prev
            currentNode.prev = currentNode.next;
            currentNode.next = temp;

            currentNode = currentNode.prev;
        }

        temp = this._head;
        this._head = this._tail;
        this._tail = temp;

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


}

module.exports = LinkedList;
