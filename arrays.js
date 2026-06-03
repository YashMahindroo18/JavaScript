let arr=["pune","delhi","Punjab"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
let num=[1,2,3,4,5];
num.forEach((val,idx,num)=>{
    console.log(val*val,idx,num);
})

// Important array methods
let newarr=num.map((val)=>{return val});
console.log(newarr)