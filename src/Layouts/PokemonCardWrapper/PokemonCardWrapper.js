import PokemonCard from "../../components/Cards/PokemonCard"
import "./PokemonCardWrapper.css"

const PokemonCardWrapper = (props) => {
    // console.log(props)
    return(
        <section className="PokemonCardWrapper">
            <PokemonCard
                pokemonName="Lucario"
                pokemonType={["Fighting"]}
                pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
                pokemonHP="70"
                updateCounter={props.updateCounter}
            />
             <PokemonCard
                pokemonName="Dragonite"
                pokemonType={["Flying", "Dragon"]}
                pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png"
                pokemonHP="110" 
                updateCounter={props.updateCounter}
             />
            <PokemonCard
                pokemonName="Swampert"
                pokemonType={["Water", "Ground"]}
                pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/260.png"
                pokemonHP="90"
                updateCounter={props.updateCounter}
            
            />
            <PokemonCard
                pokemonName="Absol"
                pokemonType={["Dark"]}
                pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/359.png"
                pokemonHP="65"
                updateCounter={props.updateCounter}
            
            />
        </section>
    )
}

export default PokemonCardWrapper