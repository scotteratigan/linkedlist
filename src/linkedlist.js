module.exports = (function () {
    var LinkedList = (function () {
        function LinkedList() {
            this.list = {};
            this.length = 0;
        }
        LinkedList.prototype.getLastNode = function (node) {
            if (node.next === undefined)
                return node;
            return this.getLastNode(node.next);
        };
        LinkedList.prototype.addLast = function (newVal) {
            if (newVal === undefined)
                return;
            var lastNode = this.getLastNode(this.list);
            lastNode.value = newVal;
            lastNode.next = {};
            this.length += 1;
        };
        LinkedList.prototype.addFirst = function (newVal) {
            if (newVal === undefined)
                return;
            var baseNode = this.list;
            this.list = {
                value: newVal,
                next: baseNode
            };
            this.length += 1;
        };
        LinkedList.prototype.getIndex = function (index, currIndex, node) {
            if (currIndex === void 0) { currIndex = 0; }
            if (node === void 0) { node = this.list; }
            if (index === currIndex) {
                return node;
            }
            if (node.next) {
                return this.getIndex(index, currIndex + 1, node.next);
            }
            throw new Error("Index doesn't exist!");
        };
        LinkedList.prototype.getValueAtIndex = function (index) {
            return this.getIndex(index).value;
        };
        LinkedList.prototype.addAtIndex = function (index, newVal) {
            var node = this.getIndex(index);
            if (node === undefined) {
                throw new Error('Index out of bounds');
            }
            var currNodeValue = node.value;
            var currNodeNext = node.next;
            node.value = newVal;
            node.next = {
                value: currNodeValue,
                next: currNodeNext
            };
        };
        LinkedList.prototype.removeAtIndex = function (index) {
            var node = this.getIndex(index);
            var returnValue = node.value;
            if (node.next) {
                node.value = node.next.value;
                node.next = node.next.next;
            }
            else {
                node = {};
            }
            this.length -= 1;
            return returnValue;
        };
        LinkedList.prototype.removeFirst = function () {
            return this.removeAtIndex(0);
        };
        LinkedList.prototype.clear = function () {
            this.list = {};
            this.length = 0;
        };
        LinkedList.prototype.contains = function (value, node) {
            if (node === void 0) { node = this.list; }
            if (node.value === value)
                return true;
            if (node.next)
                return this.contains(value, node.next);
            return false;
        };
        LinkedList.prototype.map = function (fn, node, array) {
            if (node === void 0) { node = this.list; }
            if (array === void 0) { array = []; }
            if (node.value === undefined)
                return array;
            array.push(fn(node.value));
            this.map(fn, node.next, array);
            return array;
        };
        LinkedList.prototype.filter = function (fn, node, array) {
            if (node === void 0) { node = this.list; }
            if (array === void 0) { array = []; }
            if (node.value === undefined)
                return array;
            if (fn(node.value)) {
                array.push(node.value);
            }
            if (node.next !== undefined) {
                return this.filter(fn, node.next, array);
            }
            return array;
        };
        LinkedList.prototype.forEach = function (fn, node) {
            if (node === void 0) { node = this.list; }
            if (node.value !== undefined) {
                fn(node.value);
                this.forEach(fn, node.next);
            }
        };
        LinkedList.prototype.getArray = function (node, array) {
            if (node === void 0) { node = this.list; }
            if (array === void 0) { array = []; }
            if (node.value !== undefined) {
                array.push(node.value);
                return this.getArray(node.next, array);
            }
            return array;
        };
        LinkedList.prototype.reduce = function (reduceFn, accumulator, node) {
            if (node === void 0) { node = this.list; }
            var currentValue = node.value;
            if (accumulator === undefined) {
                accumulator = currentValue;
            }
            else {
                accumulator = reduceFn(accumulator, currentValue);
            }
            if (node.next.value !== undefined)
                return this.reduce(reduceFn, accumulator, node.next);
            return accumulator;
        };
        LinkedList.prototype.getSet = function (node, set) {
            if (node === void 0) { node = this.list; }
            if (set === void 0) { set = new Set(); }
            if (node.value !== undefined) {
                set.add(node.value);
                return this.getSet(node.next, set);
            }
            return set;
        };
        LinkedList.prototype.clone = function () {
            var elements = this.getArray();
            var newList = new LinkedList();
            elements.forEach(function (elm) { return newList.addLast(elm); });
            return newList;
        };
        return LinkedList;
    }());
    return LinkedList;
})();
//# sourceMappingURL=linkedlist.js.map