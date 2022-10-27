import "./App.css";
// import PokemonCard from "../components/Cards/PokemonCard";
import PokemonCardWrapper from "../Layouts/PokemonCardWrapper/PokemonCardWrapper"
import CounterCard from "../components/CounterCard/CounterCard";
import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {counter: 0}
    }

    updateCounter = () => { 
        this.setState({counter: this.state.counter + 1})
    }
    
    render(){
        return(
            <main className="main">

                <PokemonCardWrapper updateCounter={this.updateCounter}/>
                <CounterCard counter={this.state.counter} />
                
            </main>
        )  
    }

}

export default App