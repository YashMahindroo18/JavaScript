// counting vowels in a string using function 
function countvowels(str){
    let count =0;
    for(const char of str){
        if (
          char == "a" ||
          char == "e" ||
          char == "i" ||
          char == "o" ||
          char == "u"
        ) {
          count++;
        }

    }
    console.log(count);
}
// countvowels("aeiou")
// couting using arrow function 
// let count =0;
const count=(string, count =0)=>{for(const char of string){
        if (
          char == "a" ||
          char == "e" ||
          char == "i" ||
          char == "o" ||
          char == "u"
        ) {
          count++;
        }

    }
    console.log(count);
}
count("aeiou");