const apiUrl = 'https://api-pokemon-teste-mandarin.herokuapp.com/pokemons'

async function getPokemons() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        show(data)
    } catch (error) {
        console.log(error)
    }
}

async function getRandomPokemon() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const random = Math.ceil(Math.random() * (data.length - 0) + 0)
        Object.keys(data).forEach((index) => {
            if (data[index].id == random) {
                show([data[index]])
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function getPokemonByName(pokemonName) {
    if (pokemonName == '') {
        alert("Você deve informar o nome do Pokémon para realizar esta busca")
    } else {
        pokemonName = `?name=${pokemonName}`
    }

    const url = apiUrl + pokemonName
    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.length == 0) {
            alert("O Pokémon  não encontrado")
            document.getElementById('inputBusca').value = ""
            return
        }

        show(data)
    } catch (error) {
        console.log(error)
    }
}

function show(pokemons) {
    let output = ""

    for (pokemon of pokemons) {
        output += `<div class="card" id="${pokemon.id}">
                        <div class="card-image" style="background-image: url(${pokemon.background_image_url});">
                            <img src="${pokemon.image_url}">
                        </div>
                        <div class="card-data">
                            <p class="name"><b>Name: </b>${pokemon.name}</p>
                            <p class="type"><b>Type: </b>${pokemon.category}</p>
                        </div>
                    </div>`
    }
    document.getElementById('pokemons').innerHTML = output
}


