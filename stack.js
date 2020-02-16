"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = null;
        this.items = new Array();
    }
    Stack.prototype.push = function (data) {
        this.items.push(data);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.top = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = new Array();
    };
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
exports.Stack = Stack;
