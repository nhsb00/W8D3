function thisCallback(ele) {
    // console.log(`${ele}`)
    return ele * 2;
}

Array.prototype.myEach = function (thisCallback){
    // let arr = [];
    for(let i = 0; i < this.length; i++){
        // arr.push(thisCallback(this[i]));
        thisCallback(this[i])
    }
};

// [1,2,3].myEach((ele) => {return ele*2})
[1,2,3].myEach(thisCallback);

Array.prototype.myMap = function(callback){
    let arr = [];
    this.myEach((ele) => arr.push(callback(ele)));
    console.log(`[${arr}]`)
    return arr;
};
[1,2,3].myMap(thisCallback);



//myReduce
function callback(acc, el){
    acc = acc + el;
    return acc;
}

Array.prototype.myReduce = function (callback, initValue){
    let acc = 0;
    
    if (initValue !== undefined){
        acc = initValue;
        this.myEach((ele) => (acc = callback(acc, ele)));
    } else{
        acc = this[0];
        let arr = this.slice(1, this.length);
        console.log(`${this.length}`)
        console.log(`${arr}`)
        arr.myEach((ele) => (acc = callback(acc, ele)));
    }
    console.log(`${acc}`)
    return acc;
};

[1, 2, 3].myReduce(callback, 24);
[1, 2, 3].myReduce(callback);