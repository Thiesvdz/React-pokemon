import "./PokemonCard.css"
import React from "react"; 

class PokemonCard extends React.Component {

    constructor(props){
        super(props);
        this.state = 
        {
            hp: 0,
            caughtOrRan: false,
            
        }
    }

    componentDidMount(){
        this.setState({hp: this.props.pokemonHP})
    }


    attack = () =>{

        let randomNumber = Math.floor(Math.random() * (21 - 1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp: 0,
                    caughtOrRan: true
                })
            }
        })
    }

    catch = () => {

        this.setState({caughtOrRan: true})

        let damagePercentage = 100 - Math.floor(this.state.hp / this.props.pokemonHP * 100)
            console.log(damagePercentage)

        let dice = Math.floor(Math.random() * (100 - 1) + 1)
            console.log(dice)

        if(damagePercentage > dice){
            this.props.updateCounter()
            
        }
    }

    types = this.props.pokemonType.map (function(type){
        return <span key={type} className={`pokemoncard__type pokemoncard__type__${type}`}>{type}</span>
        
    })


    render(){
        let buttons = null;
        if (this.state.caughtOrRan === false){
            buttons = 
                <>
                    <button onClick={this.attack} className="pokemoncard__btn pokemoncard__btn__attack">Attack</button>
                    <button onClick={this.catch} className="pokemoncard__btn pokemoncard__btn__catch">
                        Catch
                    </button>
                </>
        }

        return(
            <article className="pokemoncard">
                <header className="pokemoncard__header">
                    <h2 className="pokemoncard__title">{this.props.pokemonName}</h2>
                    <div className="pokemoncardlabelwrapper">
                        {this.types}
                    </div>
                </header>
                
                <section className="pokemoncard__section">
                    <figure className="pokemoncard__figure">
                        <img src={this.props.pokemonImg} alt="" className="pokemoncard__img"/>

                    </figure>
                    <div className="pokemoncard__h3__wrapper">
                        <h3 className="pokemoncard__HP"> {this.state.hp}</h3>
                    </div>
                    
                </section>
            
                <footer className="pokemoncard__footer">

                    {buttons}
                </footer>
            </article>
        )
    }
    
}

export default PokemonCard