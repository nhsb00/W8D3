// function bubbleSort(array){
//     length = array.length;
//     if(length <= 1){
//         return array;
//     };

//     swap = true;
//     while (swap === true){
//         swap = false;

//     }
// }
Array.prototype.bubbleSort = function (){
    let length = this.length;
    if(length <= 1){
        return array;
    };
    let swap = true
    while (swap === true){
        swap = false;
        for(let i = 0; i < length - 1; i++){
            if (this[i] > this[i+1]){
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swap = true;
            };
        };
    };
    console.log(`[${this}]`)
};

// [2,1,5,4].bubbleSort();

Array.prototype.bubbleSort2 = function (){
    let length = this.length;
    // let copy = [...this];
    let copy = this.slice();
    if(length <= 1){
        return array;
    };
    let swap = true
    while (swap === true){
        swap = false;
        for(let i = 0; i < length - 1; i++){
            if (copy[i] > copy[i+1]){
                let temp = copy[i];
                copy[i] = copy[i+1];
                copy[i+1] = temp;
                swap = true;
            };
        };
    };
    console.log(`[${this}]`);
    console.log(`[${copy}]`);
};

[2,1,5,4].bubbleSort2();