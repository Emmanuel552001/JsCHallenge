  const removeChar2 = (phrase) =>{
        let result =""
        for (let x=1; x<phrase.length-1; x++){
           result =  result + phrase[x];
        }
        return result;
    }
    const removeChar = (phrase)=>{
    return phrase.substring(1,phrase.length-1)
}

console.log(removeChar("Ceci est une phrase"));
console.log(removeChar2("Ceci est une phrase"));

