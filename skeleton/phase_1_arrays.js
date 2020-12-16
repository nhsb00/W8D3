Array.prototype.uniq = function() {
    let array = [];
    
    for(let i = 0; i < this.length; i++){
        if (array.indexOf(this[i]) < 0) {
            array.push(this[i]);
        }
    }
    return array
};

// [1, 2, 2, 3, 3, 3].uniq() // => [1, 2, 3]

Array.prototype.twosum = function (){
    let arr = []

    for(let i = 0; i < this.length; i++){
        for (let j = (i+1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                arr.push([i, j]);
            } 
        } 
    }
    return arr;
};
// [1, 2, 3, -1, -2].twosum()

Array.prototype.transpose = function() {
    let arr = []
    
    for (let i = 0; i < this[0].length; i++) {
            let row = [];
        for (let j = 0; j < this.length; j++) {
            row.push(this[j][i]);
        }
        arr.push(row)
    }
    return arr;
};

// [[1,1,1],[2,2,2],[3,3,3]].transpose()