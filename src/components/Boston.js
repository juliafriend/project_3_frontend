const Boston = (props) => {
    return (
            <div className="container">
            <h2 className="card-text name"> {props.travel.name}</h2>
            <h4 className="card-text name"> {props.travel.location}</h4>
            <p className="card-text name"> {props.travel.description}</p>
            <p className="card-text name">Nearby: {props.travel.nearby}</p>
            <img className= 'pic' src = {props.travel.image}/>

            </div>
)
}

export default Boston