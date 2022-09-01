const Boston = (props) => {
    return (
            <div className="card shadow p-3 mb-5 bg-body rounded">
            <p className="card-text name">Name: {props.travel.name}</p>
            <p className="card-text name">Location: {props.travel.location}</p>
            <p className="card-text name">Description: {props.travel.description}</p>
            <p className="card-text name">Nearby: {props.travel.nearby}</p>
            <img src = {props.travel.image}/>
=======
            <div className="container">
            <h2 className="card-text name"> {props.travel.name}</h2>
            <h4 className="card-text name"> {props.travel.location}</h4>
            <p className="card-text name"> {props.travel.description}</p>
            <p className="card-text name">Nearby: {props.travel.nearby}</p>
            <img className= 'pic' src = {props.travel.image}/>

>>>>>>> 374268eb998f9e65951d5e6f8d2ed643fe2ba156
            </div>
)
}

export default Boston
=======
export default Boston
>>>>>>> 374268eb998f9e65951d5e6f8d2ed643fe2ba156
