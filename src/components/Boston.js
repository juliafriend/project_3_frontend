const Boston = (props) => {
    return (
            <div className="container">
            <h2 className="card-text name"> {props.travel.name}</h2>
            <h4 className="card-text name"> {props.travel.location}</h4>
            <p className="card-text name"> {props.travel.description}</p>
            <p className="card-text name">Nearby: {props.travel.nearby}</p>
            <img className= 'pic' src = {props.travel.image}/>
            <button className='update2' onClick={ (event)=>{ handleDelete(travel) } }>Delete</button>
            <details>
              <summary>Update Suggestion</summary>
              <div className='subContainer'>
              <button className='update' onClick={ (event) => { handleUpdateName(travel) } }>Update Name</button>
              <input className='update1' type="text" placeholder={travel.name} onKeyUp= {updateNewNameChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateLocation(travel) } }>Edit Location</button>
              <input className='update1' type="text" placeholder={travel.location} onKeyUp= {updateNewLocationChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateDescription(travel) } }>Update Description</button>
              <input className='update1' type="text" placeholder={travel.description} onKeyUp= {updateNewDescriptionChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateImage(travel) } }>Update Image</button>
              <input className='update1' type="text" placeholder={travel.image} onKeyUp= {updateNewImageChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateNearby(travel) } }>Update Nearby</button>
              <input className='update1' type="text" placeholder={travel.nearby} onKeyUp= {updateNewNearbyChange}/> <br/>
               </div> 
               </details>
            </div>
)
}

export default Boston