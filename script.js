var skills= ["HTML", "CSS", "JS"]
skills.push("PHP")
//for loop
for(var i=0;i<=skills.length-1;i++){
    console.log(skills[i])
}
//switch condition
switch(skills[0]){
    case "HTML":
        console.log("le module HTML est disponible (by switch)")
        break
    case "CSS":
        console.log("le module CSS est disponible (by switch)")
        break
    case "JS":
        console.log("le module JS est disponible (by switch)")
        break
    default:
        console.log("le module n'est pas disponible (by switch)")
        break
}
//conditional
 if(skills.includes("HTML")){
     console.log("le module HTML est disponible")
 }
 else {
     console.log("le module HTML n'est pas disponible")
 }
//arrow function
 const checkSkillAvailability = (skill) => skills.includes(skill);
 
//ternary operator
 var reponse=checkSkillAvailability?"le module HTML est disponible":"le module HTML n'est pas disponible"
 console.log(reponse+"---------------")


 //Partie 3
 console.log("Partie 3 ----------------------------------")
 //cree une list de 10 elements qui contient les fruits
 var fruits = ["pomme", "cerise", "orange", "melon", "poire", "fraise", "raisin", "cerise", "orange", "melon"];
 //affiche les elements de la list par la methode map
 fruits.map(x=>console.log(x))

 //affiche les elements de la list en utilisnant la methode filter
 result=fruits.filter(x=>x.includes('o'))
 console.log(result)

 //affiche les elements de la list par la methode find et ternnary condtion
 fruits.find(x=>x=="orange")?console.log("orange est dans la liste"):console.log("orange n'est pas dans la liste");

 //supprime les elements de la list depuis l'index 2, 5 elements
 fruits.splice(2,5).map(x=>console.log(x))

 console.log(fruits)



