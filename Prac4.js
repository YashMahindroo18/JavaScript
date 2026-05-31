let res=Number(prompt("Enter Score:"));
let grade;
if(res>=90 && res<=100){
    grade='A';

}
else if(res<90 && res>=70){
    grade='B';
}
else if(res<70 && res>=60){
    grade='C';
}
else if(res<60 && res>=50){
    grade='D';
}
else{
    grade='F';
}
console.log(`Score: ${res}, Grade: ${grade}`);