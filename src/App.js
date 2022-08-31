import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [travel, setTravel] = useState([]);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newNearby, setNewNearby] = useState('');
  const [updatedName, setUpdatedName]= useState('')
  const [updatedLocation, setUpdatedLocation]= useState('')
  const [updatedDescription, setUpdatedDescription]= useState('')
  const [updatedImage, setUpdatedImage]= useState('')
  const [updatedNearby, setUpdatedNearby]= useState('')
  let [display, setDisplay] = useState(false)
  let [displayLosAngeles, setDisplayLosAngeles] = useState(false);
  const [losAngeles, setLosAngeles] = useState([]); 
  

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewLocationChange = (event) => {
    setNewLocation(event.target.value)
  }
  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value)
  }
  const handleNewImageChange = (event) => {
    setNewImage(event.target.value)
  }
  const handleNewNearbyChange = (event) => {
    setNewNearby(event.target.value)
  }

  const updateNewNameChange = (event) => {
    setUpdatedName(event.target.value)
  }
  const updateNewLocationChange = (event) => {
    setUpdatedLocation(event.target.value)
  }
  const updateNewDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value)
  }
  const updateNewImageChange = (event) => {
    setUpdatedImage(event.target.value)
  }
  const updateNewNearbyChange = (event) => {
    setUpdatedNearby(event.target.value)
  }
  const showBoston = () => {
    setDisplay(!display)
    setDisplayLosAngeles(false)
  }
  const showLosAngeles = () => {
    setDisplayLosAngeles(!displayLosAngeles)
    setDisplay(false)
  }
  const handleNewTravelSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'https://infinite-sands-80753.herokuapp.com/travels',
      {
        name:newName,
        location:newLocation,
        description:newDescription,
        image:newImage,
        nearby:newNearby
      }
    ).then(()=>{
      axios.get('https://infinite-sands-80753.herokuapp.com/travels').then((response) => {
        setTravel(response.data)
      })
    })
  }
  const handleDelete = (travelData) => {
    axios
        .delete(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`)
        .then(() => {
          axios
              .get('https://infinite-sands-80753.herokuapp.com/travels/')
              .then((response) => {
                setTravel(response.data)
              });
        });
  }
  const handleUpdateName = (travelData)=>{
    axios.put(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`,
        {
          name: updatedName,
          location: travelData.location,
          description: travelData.description,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('https://infinite-sands-80753.herokuapp.com/travels')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateLocation = (travelData)=>{
    axios.put(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: updatedLocation,
          description: travelData.description,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('https://infinite-sands-80753.herokuapp.com/travels')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateDescription = (travelData)=>{
    axios.put(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: updatedDescription,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('https://infinite-sands-80753.herokuapp.com/travels')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateImage = (travelData)=>{
    axios.put(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: travelData.description,
          image: updatedImage,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('https://infinite-sands-80753.herokuapp.com/travels')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateNearby = (travelData)=>{
    axios.put(`https://infinite-sands-80753.herokuapp.com/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: travelData.description,
          image: travelData.image,
          nearby: updatedNearby
        }
      ).then((response) => { axios.get('https://infinite-sands-80753.herokuapp.com/travels')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
useEffect(()=>{
  getBoston();
  getLosAngeles();
},[])

const getBoston = () => {
    axios
        .get('https://infinite-sands-80753.herokuapp.com/travels')
        .then((response)=>{
        	setTravel(response.data)
        })
}
const getLosAngeles = () => {
  axios
  .get('https://infinite-sands-80753.herokuapp.com/losangeles')
  .then((response)=>{
    setLosAngeles(response.data)
    setDisplayLosAngeles(false)
  })
}

  return (
    <>
    <h1 className='header'>Welcome to our Travel Suggestions Page</h1>
    <div className="mainContainer">
    <button className="btn" onClick={showBoston}>Boston Recommendations</button>
    <button className="btn" onClick={showLosAngeles}>Los Angeles Recommendations</button>
    {display
     ? travel.map((travel)=>{
        return (
          <div className='container'>
            <h2>{travel.name}</h2>
            <h4>{travel.location}</h4>
            <p>{travel.description}</p>
            <img className='pic' src = {travel.image}/>
            <p>Nearby Attractions:{travel.nearby}</p>
            <button className='update2' onClick={ (event)=>{ handleDelete(travel) } }>Delete</button> <br></br>
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
               <br></br>
                </div>
                )
            })
          : null}
    {displayLosAngeles
     ? losAngeles.map((losAngeles)=>{
        return (
          <div className='container'>
            <h2>{losAngeles.name}</h2>
            <h4>{losAngeles.location}</h4>
            <p>{losAngeles.description}</p>
            <img className='pic' src = {losAngeles.image}/>
            <p>Nearby Attractions:{losAngeles.nearby}</p>
                </div>
                )
            })
          : null}

    </div>
    <br></br>
    <div className='container1'>
    <h2>Make a new Recommendation!</h2>
    <div className='subContainer1'>
      <form onSubmit={handleNewTravelSubmit}>
        <input className='update1' type="text" placeholder="Name" onChange={handleNewNameChange}/><br/>
        <input className='update1' type="text" placeholder="Location" onChange={handleNewLocationChange}/><br/>
        <input className='update1' type="text" placeholder="Description" onChange={handleNewDescriptionChange}/><br/>
        <input className='update1' type="text" placeholder="Image Link" onChange={handleNewImageChange}/><br/>
        <input className='update1' type="text" placeholder="Nearby" onChange={handleNewNearbyChange}/><br/>
        <input type="submit" value="Post your recommendation"/>
        <input type="reset" value="Reset Form"/>
      </form>
    </div>
    </div>
    </>
  )
}
   
export default App;
