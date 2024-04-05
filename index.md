# HTML
*Hypertext*

*Markup*
- Tag 
 -table(criar uma tabela)
 -thead(cabeçalho)
 -tr(cada uma das linhas)
 -th(nome)
-Atributos
*Language*

#Java script
```Js
// variaveis
const mensagem= "Oi tudo bem?"
//tipos de dados
  //number
  //string
// funcao
alert(mensagem)
´´´
// objeto javascript
const participante = {
 nome: "Dayanne Cássia",
 email: "dayanne@gmail.com",
 dataInscricao: new Date(2024, 2, 22, 19, 20),
 dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

//array
let participantes = [
  {
 nome: "Dayanne Cássia",
 email: "dayanne@gmail.com",
 dataInscricao: new Date(2024, 2, 22, 19, 20),
 dataCheckIn: new Date(2024, 2, 25, 22, 00)
},
]

// estrutura de repetição - loop
for(let participante of participantes) {
 output = output + criarNovoParticipante(participante)
}


