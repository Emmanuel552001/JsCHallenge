<script>
    const whoseMove=(couleur, resultat) => {
        if (resultat===true){
            return couleur;
        } else if(resultat === false){
        return couleur === "white"? "black" : "white";
    }   
        
    }

    const whoseMove2=(couleur,resultat) => {
        return resultat === true ? (couleur==="white"? "white": "black") : (couleur==="white" ? "black" : "white");
    }
    console.log("Test 1....")
    console.log(whoseMove("black",true));
    console.log(whoseMove("white",true));
    console.log(whoseMove("black",false));
    console.log(whoseMove("white",false));
    
    console.log("Test 2....")
    console.log(whoseMove2("black",true));
    console.log(whoseMove2("white",true));
    console.log(whoseMove2("black",false));
    console.log(whoseMove2("white",false));
</script>



