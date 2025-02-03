function passagersRestants(list){
    
    //option1
    let restant = 0
    for (let i = 0 ; i < list.length; i++){
      restant += list[i][0] - list[i][1];
    }
    return restant;
}
// option 2
const restant = (lst)=> {
    let total = 0;
    lst.forEach(element => {
        total += element[0] - element[1]; 
    });
    return total;
}

// option 3 utilisation de reduce
const rest_passagers = (liste)=> liste.reduce((total, element) => total + (element[0] - element[1]),0);

console.log("Test de base..")
console.log(passagersRestants([[10,0],[3,5],[5,8]]));
console.log(passagersRestants([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(passagersRestants([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));


console.log("Fonction fléché : " + restant([[4,2],[8,2]]));


console.log("Utilisation de reduce : " + rest_passagers([[14,4],[8,2]]));
