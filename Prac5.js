let name=prompt("Enter FUll Name:");
name = name.replaceAll(" ","");

const length=name.length;
let processedname=`@${name}${length}`;
console.log(processedname);