let participantes = [
  {
    nome: "Dayanne Cássia",
    email: "dayanne@gmail.com",
    dataInscricao: new Date(2024, 2, 2, 19, 23),
    dataCheckIn: new Date(2024, 2, 2, 20, 20)
  },
  {
    nome: "Roberto Filho",
    email: "roberto@gmail.com",
    dataInscricao: new Date(2024, 1, 5, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 0, 15, 10, 30),
    dataCheckIn: new Date(2024, 0, 15, 11, 0)
  },
  {
    nome: "Maria Souza",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 14, 15),
    dataCheckIn: new Date(2024, 3, 1, 15, 0)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 8, 45),
    dataCheckIn: new Date(2024, 2, 20, 9, 30)
  },
  {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 2, 12, 0),
    dataCheckIn: null
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 16, 50),
    dataCheckIn: null
  },
  {
    nome: "Carla Mendes",
    email: "carla@gmail.com",
    dataInscricao: new Date(2024, 1, 25, 18, 10),
    dataCheckIn: new Date(2024, 1, 25, 18, 45)
  },
  {
    nome: "Rafaela Lima",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 21, 0),
    dataCheckIn: null
  },
  {
    nome: "Gustavo Santos",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 15, 20),
    dataCheckIn: new Date(2024, 0, 10, 16, 0)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
 let dataCheckIn = dayjs(Date.now())
 .to(participante.dataCheckIn)
 
 // condicional
 if(participante.dataCheckIn == null) {
   dataCheckIn = `
     <button
     data-email="${participante.email}"
     onclick="fazerCheckIn(event)"
   >
     Confirmar check-in
     </button>
  `
 }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email} 
      </small>
    </td>
    <td>${dataInscricao} </td>
    <td>${dataCheckIn} </td>
  </tr>
`
}

const atualizarLista = (participantes) => {
let output = ""
for(let participante of participantes) {
 output = output + criarNovoParticipante(participante)
}

// substituir informação do HTML
document
.querySelector('tbody')
.innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

const dadosDoFormulario = new FormData(event.target)

const participante = {
  nome: dadosDoFormulario.get ('nome'),
  email: dadosDoFormulario.get ('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
}

// verificar se o participante ja existe
const participanteExiste = participantes.find(
  (p) =>  p.email == participante.email
)

if(participanteExiste){
  alert('Email já cadastrado!')
  return
}

participantes = [participante, ...participantes]
atualizarLista(participantes)

// limpar o formulario
event.target.querySelector('[name="nome"]').value = ""
event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
//confirmar se realmente quer o check-in
const mensagemConfirmacao = 'Tem certeza que quer fazer o check-In?'
if( confirm(mensagemConfirmacao) == false) {
  return
}


 //encontrar o participante dentro da lista
 const participante = participantes.find(
  (p) => p.email == event.target.dataset.email 
)

 //atualizar o check-in do participante
 participante.dataCheckIn = new Date()

 //atualizar a lista de participantes
 atualizarLista(participantes)
}