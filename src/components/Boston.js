const Boston = (props) => {
    return (
            <div className="">
            <p className="card-text name">Name: {props.travel.name}</p>
            <p className="card-text name">Location: {props.travel.location}</p>
            <p className="card-text name">Description: {props.travel.description}</p>
            <p className="card-text name">Nearby: {props.travel.nearby}</p>
            <img src = {props.travel.image}/>
            </div>
)
}

export default Boston