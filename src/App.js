import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Boston from './components/Boston'
import LosAngeles from './components/LosAngeles'

const App = () => {
  const [travel, setTravel] = useState([]);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newNearby, setNewNearby] = useState('');
  const [updatedName, setUpdatedName]= useState('');
  const [updatedLocation, setUpdatedLocation]= useState('');
  const [updatedDescription, setUpdatedDescription]= useState('');
  const [updatedImage, setUpdatedImage]= useState('');
  const [updatedNearby, setUpdatedNearby]= useState('');
  let [display, setDisplay] = useState(false);
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
      'http://localhost:3000/travels/',
      {
        name:newName,
        location:newLocation,
        description:newDescription,
        image:newImage,
        nearby:newNearby
      }
    ).then(()=>{
      axios.get('http://localhost:3000/travels/').then((response) => {
        setTravel(response.data)
      })
    })
  }
  const handleDelete = (travelData) => {
    axios
        .delete(`http://localhost:3000/travels/${travelData._id}`)
        .then(() => {
          axios
              .get('http://localhost:3000/travels/')
              .then((response) => {
                setTravel(response.data)
              });
        });
  }
  const handleUpdateName = (travelData)=>{
    axios.put(`http://localhost:3000/travels/${travelData._id}`,
        {
          name: updatedName,
          location: travelData.location,
          description: travelData.description,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('http://localhost:3000/travels/')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateLocation = (travelData)=>{
    axios.put(`http://localhost:3000/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: updatedLocation,
          description: travelData.description,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('http://localhost:3000/travels/')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateDescription = (travelData)=>{
    axios.put(`http://localhost:3000/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: updatedDescription,
          image: travelData.image,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('http://localhost:3000/travels/')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateImage = (travelData)=>{
    axios.put(`http://localhost:3000/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: travelData.description,
          image: updatedImage,
          nearby: travelData.nearby
        }
      ).then((response) => { axios.get('http://localhost:3000/travels/')
          .then((response) => {
            setTravel(response.data);
          })
    })
  }
  const handleUpdateNearby = (travelData)=>{
    axios.put(`http://localhost:3000/travels/${travelData._id}`,
        {
          name: travelData.name,
          location: travelData.location,
          description: travelData.description,
          image: travelData.image,
          nearby: updatedNearby
        }
      ).then((response) => { axios.get('http://localhost:3000/travels/')
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
  .get('http://localhost:3000/travels/')
  .then((response)=>{
    setTravel(response.data)
  })
}
const getLosAngeles = () => {
  axios
  .get('http://localhost:3000/losangeles/')
  .then((response)=>{
    setLosAngeles(response.data)
    setDisplayLosAngeles(false)
  })
}
  return (
    <div className="container">
    <h1>Welcome to our Travel Suggestions Page</h1>
    <h2>Create new suggestion</h2>
      <form onSubmit={handleNewTravelSubmit}>
        Name: <input type="text" onChange={handleNewNameChange}/><br/>
        Location: <input type="text" onChange={handleNewLocationChange}/><br/>
        Description: <input type="text" onChange={handleNewDescriptionChange}/><br/>
        Image: <input type="text" onChange={handleNewImageChange}/><br/>
        Nearby: <input type="text" onChange={handleNewNearbyChange}/><br/>
        <input type="submit" value="Post your suggestion"/>
      </form>
    <hr/>
    <h2>See our Suggestions</h2>
    <button className="btn btn-primary" onClick={showBoston}>Show Boston</button> 
    <button className="btn btn-primary" onClick={showLosAngeles}>Show LA</button> 
    <div>
      {travel.map((travel)=>{
        return (
            <div>
                {display ? <Boston travel={travel} /> : null}
            </div>
                )
            })}
      {losAngeles.map((losAngeles) => {
        return (
          <div>
                {displayLosAngeles ? <LosAngeles losAngeles={losAngeles} /> : null}
          </div>
        )
      })}
    </div>
    </div>
  )
}
   
export default App;
