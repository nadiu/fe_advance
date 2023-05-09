
const text = document.querySelector('.text');
const planet = document.querySelector('.planet').addEventListener('click', ()=> {
    document.querySelector("#box").innerHTML=''
 return getPlanet();
})
const people = document.querySelector('.people').addEventListener('click', ()=> {
    document.querySelector("#box").innerHTML=''
 return getPeople();
})


async function getPeople(){
   await fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(people => {
        people.results.forEach(people => {
            renderUser(people);
        });
    })
}

function renderUser(user) {
    const userTample = `
    <div class = "box1">
        <h1 class = "user-name">${user.name}</h1>
        <img class = "photo" src="./img_star_wars/${user.name}.jpg" alt = "img${user.name}"></img>
        <p class = "user-birth-year">Year of birth:  ${user.birth_year}</p>
        <p class = "user-gender">Gender: ${user.gender}</p>
    </div>
    `;
    document.querySelector("#box").innerHTML += userTample;

}

async function getPlanet(){
    await fetch('https://swapi.dev/api/planets/')
    .then(res => res.json())
    .then(planet => {
        planet.results.forEach(planet => {
            renderPlanets(planet);
        });
    })
}

function renderPlanets(planet) {
    const planetTample = `
    <div class = "box2">
        <h1 class = "planet-name">Name: ${planet.name}</h1>
        <img class = "photo" src="./img_star_wars/${planet.name}.jpg" alt = "img${planet.name}">
        <p class = "planet-climate">Climate:  ${planet.climate}</p>
        <p class = "planet-population">Population: ${planet.population}</p>
    </div>
    `;
    document.querySelector("#box").innerHTML += planetTample;
}
