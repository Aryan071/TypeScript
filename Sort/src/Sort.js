"use strict";
// const collection:number[] = [12,-9,4,8,22];
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
        this.collection = [12, -9, 4, 8, 22];
    }
    Sort.prototype.sort = function () {
        var length = this.collection.length;
        // let k = 0;
        // while (k<length) {
        //   if(this.collection[k] > this.collection[k+1]){
        //       let temp:number = this.collection[k];
        //       this.collection[k] = this.collection[k+1];
        //       this.collection[k+1] = temp;
        //   }
        //   k = k+1;
        // }
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
        for (var i = 0; i < length; i++) {
            console.log(this.collection[i]);
        }
    };
    return Sort;
}());
exports.Sort = Sort;
