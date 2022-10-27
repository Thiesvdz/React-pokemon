import "./CounterCard.css"

const CounterCard = ({counter}) => {
    return(
        
        <section className="countercard">
            <h1 className="countercard__h1">{counter}</h1>
        </section>
    )
}

export default CounterCard