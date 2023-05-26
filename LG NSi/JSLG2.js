let title = document.getElementById("choix")
let valeursDesRoles = document.querySelectorAll(".roles .nbr .nbdej")
let nbjoueurs = localStorage.getItem("nombredejoueurs")


function totalrole(){
  return sum(valeursDesRoles)
}

function sum(valeursDesRoles){
  let total = 0
  for(valeur of valeursDesRoles){
    total += valeur.value
  }
  return total
}

let nbroles = sum(valeursDesRoles)
let nbrestant = nbjoueurs - nbroles

for(valeur of valeursDesRoles){
  valeur.addEventListener("input", function(){
    title.innerHTML = "Choix des rôles : " + nbrestant +" rôles restants à choisir "
    nbroles = sum(valeursDesRoles)
    console.log("b")
  })
}


