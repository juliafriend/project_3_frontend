const LosAngeles = (props) => {
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded">
        <p className="card-text name">Name: {props.losAngeles.name}</p>
        <p className="card-text name">Location: {props.losAngeles.location}</p>
        <p className="card-text name">Description: {props.losAngeles.description}</p>
        <p className="card-text name">Nearby: {props.losAngeles.nearby}</p>
        <img src = {props.losAngeles.image}/>
        </div>
)
}

export default LosAngeles
