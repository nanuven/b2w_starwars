let button = document.querySelector('#button')
let planetName = document.querySelector('.card-title')
let planetPopulation = document.querySelector('#population')
let planetClimate = document.querySelector('#climate')
let planetTerrain = document.querySelector('#terrain')
let planetFilmes = document.querySelector('#filmes')
let loading = document.querySelector('#button span')

function getInfo() {
  let randomNumber = Math.floor((Math.random() * 60) + 1)
  let apiUrl = 'https://swapi.co/api/planets/' + randomNumber

  loading.style.display = 'inline'
  axios.get(apiUrl).then(response => {
    updateInfo(response.data)
  })
}

function updateInfo(data){
  loading.style.display = 'none'

  planetName.innerText       = data.name
  planetPopulation.innerText = data.population
  planetClimate.innerText    = data.climate
  planetTerrain.innerText    = data.terrain
  planetFilmes.innerText     = data.films.length
}

button.addEventListener('click', getInfo)
window.onload = getInfo
