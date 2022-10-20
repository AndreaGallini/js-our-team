"use-strict"
const btn = document.getElementById('button')
const input1Html = document.getElementById('input1')
const input2Html = document.getElementById('input2')
const input3Html = document.getElementById('input3')
const test = document.getElementById('test')
const riga = document.getElementById('row')
let team = [
    {
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        immmagine : './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        immmagine : './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        immmagine : './img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        immmagine : './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        immmagine : './img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barabara Ramos',
        role: 'Graphic Designer',
        immmagine : './img/barbara-ramos-graphic-designer.jpg',
    },
    
];
console.log(team)


function generaCard(){
    for(let key in team){
        console.log(team[key])
       // test.innerText += team[key].nome
       let card = document.createElement('div');
       card.classList.add('col-5');
       card.classList.add('text-center');
       card.classList.add('my-card')
      riga.append(card)
  
      function GeneraInternoCard(){
          let immagine = document.createElement('img');
          immagine.setAttribute('src', team[key].immmagine)
          immagine.classList.add('rounded')
          let nome = document.createElement('h1');
          nome.innerHTML = team[key].nome
          let ruolo = document.createElement('h3');
          ruolo.innerHTML = team[key].role
          card.append(immagine , nome , ruolo)
      }
      GeneraInternoCard()

  }

}
function aggiungi(){
    let nuovoOggetto = {
        nome : input1Html.value,
        role : input2Html.value,
        immmagine : input3Html.value
    }
    team.push(nuovoOggetto)
    console.log(nuovoOggetto)
    console.log(team)
    generaCardAggiunta()
    function generaCardAggiunta(){
        let card = document.createElement('div');
        card.classList.add('col-5');
        card.classList.add('text-center');
        card.classList.add('my-card')
       riga.append(card)
      
    function GeneraInternoCardAggiunta(){
              let immagine = document.createElement('img');
              immagine.setAttribute('src', nuovoOggetto.immmagine);
              immagine.classList.add('rounded')
              let nome = document.createElement('h1');
              nome.innerHTML = nuovoOggetto.nome
              let ruolo = document.createElement('h3');
              ruolo.innerHTML = nuovoOggetto.role
              card.append(immagine , nome , ruolo)
          }
          GeneraInternoCardAggiunta()
    
      }
    
    input1Html.value = '';
    input2Html.value = '';
    input3Html.value = '';
    

}
btn.addEventListener('click', aggiungi)
generaCard()









/* <div class="col-4 text-center">
<img src="./img/angela-caroll-chief-editor.jpg" alt="">
<h1>Ciao</h1>
<p>ruolo</p>
</div> */