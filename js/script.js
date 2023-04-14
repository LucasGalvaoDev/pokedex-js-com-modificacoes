const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

const typeOne = document.querySelector('.pokemon_type');
const typeTwo = document.querySelector('.pokemon_second_type');
const typeOrganization = document.querySelector('.pokemon_type_organization');
const shinyButton = document.querySelector('.shinyButton');
const statusButton = document.querySelector('.btn_inform');
const statusDiv = document.querySelector('.statusDiv');

let searchPokemon = 1;
let shinyButtonClicked = false;
let shinyPokemon = '';
let normalPokemon = '';
let statusPokemon = [];

const fetchPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading ...';
    pokemonNumber.innerHTML = '';

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        shinyPokemon = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
        normalPokemon = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        statusPokemon = data['stats']

        input.value = '';
        searchPokemon = data.id;

        typeOne.innerHTML = data['types']['0']['type']['name']
        typeOne.style.display = '';

        switch (typeOne.textContent) {
            case 'normal':
                typeOne.style.backgroundColor = '#b6b7a9';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'poison':
                typeOne.style.backgroundColor = '#9d5693';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'psychic':
                typeOne.style.backgroundColor = '#f364b0';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'grass':
                typeOne.style.backgroundColor = '#87cb50';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'ground':
                typeOne.style.backgroundColor = '#eac45b';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'ice':
                typeOne.style.backgroundColor = '#95f1fe';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'fire':
                typeOne.style.backgroundColor = '#f04f3f';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'rock':
                typeOne.style.backgroundColor = '#cdb96b';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'dragon':
                typeOne.style.backgroundColor = '#8973ff';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'water':
                typeOne.style.backgroundColor = '#59a9fb';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'bug':
                typeOne.style.backgroundColor = '#bfcd1e';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'dark':
                typeOne.style.backgroundColor = '#8e6956';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'fighting':
                typeOne.style.backgroundColor = '#aa5345';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'ghost':
                typeOne.style.backgroundColor = '#7874d5';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'steel':
                typeOne.style.backgroundColor = '#c3c1da';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'flying':
                typeOne.style.backgroundColor = '#7ba2fb';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'electric':
                typeOne.style.backgroundColor = '#fae339';
                typeOne.style.textTransform = 'capitalize';
                break;
            case 'fairy':
                typeOne.style.backgroundColor = '#f9aeff';
                typeOne.style.textTransform = 'capitalize';
                break;
            default:
                break;
        }

        if (data['types']['1'] != null) {
            typeTwo.innerHTML = data['types']['1']['type']['name']
            typeTwo.style.display = '';
            typeOrganization.style.left = '18%';

            switch (typeTwo.textContent) {
                case 'normal':
                    typeTwo.style.backgroundColor = '#b6b7a9';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'poison':
                    typeTwo.style.backgroundColor = '#9d5693';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'psychic':
                    typeTwo.style.backgroundColor = '#f364b0';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'grass':
                    typeTwo.style.backgroundColor = '#87cb50';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'ground':
                    typeTwo.style.backgroundColor = '#eac45b';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'ice':
                    typeTwo.style.backgroundColor = '#95f1fe';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'fire':
                    typeTwo.style.backgroundColor = '#f04f3f';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'rock':
                    typeTwo.style.backgroundColor = '#cdb96b';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'dragon':
                    typeTwo.style.backgroundColor = '#8973ff';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'water':
                    typeTwo.style.backgroundColor = '#59a9fb';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'bug':
                    typeTwo.style.backgroundColor = '#bfcd1e';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'dark':
                    typeTwo.style.backgroundColor = '#8e6956';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'fighting':
                    typeTwo.style.backgroundColor = '#aa5345';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'ghost':
                    typeTwo.style.backgroundColor = '#7874d5';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'steel':
                    typeTwo.style.backgroundColor = '#c3c1da';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'flying':
                    typeTwo.style.backgroundColor = '#7ba2fb';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'electric':
                    typeTwo.style.backgroundColor = '#fae339';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                case 'fairy':
                    typeTwo.style.backgroundColor = '#f9aeff';
                    typeTwo.style.textTransform = 'capitalize';
                    break;
                default:
                    typeTwo.style.backgroundColor = '';
                    break;
            }
        }
        else {
            typeTwo.style.display = 'none';
            typeOrganization.style.left = '10%';
        }


    }
    else {
        pokemonName.innerHTML = 'Not found :(';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none';
        statusPokemon = [];
        typeOne.innerHTML = '';
        typeOne.style.display = 'none';
        typeTwo.innerHTML = '';
        typeTwo.style.display = 'none';
        statusDiv.classList.remove("animacao")
        statusDiv.classList.add("animacao-escondido")
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

prev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

next.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

shinyButton.addEventListener('click', () => {
    if (shinyButtonClicked) {
        pokemonImage.src = normalPokemon;
        shinyButtonClicked = false;
    }
    else {
        pokemonImage.src = shinyPokemon;
        shinyButtonClicked = true;
    }
});

statusButton.addEventListener('click', () => {
    const hp = document.querySelector('.hp');
    const attack = document.querySelector('.attack');
    const defense = document.querySelector('.defense');
    const specialAttack = document.querySelector('.special-attack');
    const specialDeffense = document.querySelector('.special-defense');
    const speed = document.querySelector('.speed');

    if (pokemonName.textContent != 'Not found :(' && pokemonName.textContent != "") {
        hp.innerHTML = `HP - ${statusPokemon[0].base_stat}`;
        attack.innerHTML = `ATTACK - ${statusPokemon[1].base_stat}`;
        defense.innerHTML = `DEFENSE - ${statusPokemon[2].base_stat}`;
        specialAttack.innerHTML = `SPECIAL ATTACK - ${statusPokemon[3].base_stat}`;
        specialDeffense.innerHTML = `SPECIAL DEFENSE - ${statusPokemon[4].base_stat}`;
        speed.innerHTML = `SPEED - ${statusPokemon[5].base_stat}`;

        if (statusDiv.classList.contains("animacao")) {
            statusDiv.classList.remove("animacao")
            statusDiv.classList.add("animacao-escondido")
        }
        else {
            statusDiv.classList.remove("animacao-escondido")
            statusDiv.classList.add("animacao")
        }
    }
    else {
        statusDiv.classList.remove("animacao")
        statusDiv.classList.add("animacao-escondido")
        hp.innerHTML = '';
        attack.innerHTML = '';
        defense.innerHTML = '';
        specialAttack.innerHTML = '';
        specialDeffense.innerHTML = '';
        speed.innerHTML = '';
    }



});

renderPokemon(searchPokemon)