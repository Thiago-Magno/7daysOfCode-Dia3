var linguagem 

const area = prompt(`Qual area você se identifica mais Front ou back-end?
Digite o nome da area `)
if (area === "Front-end") {
  linguagem = (prompt(`Qual linguagem deseja aprender React.js ou Vue.js? Digite o nome da linguagem`))
}
else if (area === "Back-end") {
  linguagem = prompt(`Qual linguagem deseja aprender java ou C#? Digite o nome da linguagem`)
}
else{
  alert("Por favor insira uma opções apresentadas!")
}

var tecNova = [], tecnologia
const especializa_Fullstack = prompt("Deseja se especializa(Digite 1 para se especializa) na area ou vira Full-stack(Digite 2 para Full stack)?")
if (especializa_Fullstack == 1) {
  
  while(tecnologia != "Sair"){
    console.log("entro na repetição")
     tecnologia = prompt(`Tem mais alguma tecnologia que você quer aprender
    Digite Sair para terminar`)
    let adiciona = tecNova.push(tecnologia)
  }
  alert(`Você escolheu se especializar em ${area}`)
  alert(`A carreira que você decidiu se foi se especializa em ${area}
  e aprender ${tecNova} `)
}else if (especializa_Fullstack == 2) {
  
  while(tecnologia != "Sair"){
    console.log("entro na repetição")
    tecnologia = prompt(`Tem mais alguma tecnologia que você quer aprender
    Digite Sair para terminar`)
    let adiciona = tecNova.push(tecnologia)
    
  }
  alert(`Você escolheu se tornar FullStack!`)
  alert(`A carreira que você decidiu se foi ${area}, e depos se torna
  FullStack Com as tenologias ${linguagem}, e depois tentando a aprender ${tecnologia} `)
}
else{
  alert("Por favor insira uma opções apresentadas!")
}

