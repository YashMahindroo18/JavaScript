// let i=0;
// for(i;i<10;i++){
//     console.log("hello world!")
// }
// // calculate sum of first n numbers 
// let sum =0;
// for(let j=1;j<=5;j++){
//     sum+=j;
// }
// let str="JavaScript";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log(size);
// console.log(sum);
let details={
    name:"yash",
    age:20,
    pass:true,
    cgpa:true,
}
// for(let i in details){
//     console.log(i);
// }
// let n=100;
// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log("Finished");


// let arr=[23,5,2,5,2,4,12,4,2];
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }
// for(let h of arr){
//     console.log(h);
// }
// let sum=0;
// for(s of arr){
//     sum+=s;
    
// }
// console.log(sum/arr.length);
// let arr2=[250,645,300, 900,50];
// arr2.push(800);
// console.log(arr2.pop());
// for(item in arr2){
//     arr2[item]*=0.1;
// }
// console.log(arr2);
// let o=[1,2,3,4,5,6,7];
// console.log(o.length);
// o.splice(2,2);
// console.log(o);
// console.log("after deduction:"+ o.length);
let companies= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"OLA");
console.log(companies);
companies.push("Amazon");
console.log(companies);
let k= companies;
for(let u=0;u<k.length;u++){
    k[u]=k[u].toUpperCase();
}
console.log("After everything:\n"+ k);


// for each loop for arrays
let arr=[1,2,4,5];
arr.forEach(function print(val){
    console.log(val);
});