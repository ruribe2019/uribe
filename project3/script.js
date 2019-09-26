// se incluye logo y contenedor
const app=document.getElementById('root');
const logo=document.createElement('img');
logo.src='logo.jpg';
const container=document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

// se comienza a pedir datos
var request=new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload=function() {
var data=JSON.parse(this.response);
data.forEach(movie=>{
//console.log(movie.title)
let titulo=document.createElement('h4');
titulo.textContent=movie.title;
titulo.setAttribute('class','card');
let descripcion=document.createElement('p');
descripcion.innerHTML=movie.descripcion;
container.appendChild(titulo);
container.appendChild(descripcion);
})
}
request.send();

/*
data.forEach(movie=> {
    const card=document.createElement('div')
    card.setAttribute('class', 'card')
    const h1=document.createElement('h1')
    h1.textContent=movie.title
    const p=document.createElement('p')
    movie.description=movie.description.substring(0, 300) // Limit to 300 chars
    p.textContent=`${movie.description}...`
    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
    })*/
