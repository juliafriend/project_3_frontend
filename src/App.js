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

  const handleNewTravelSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'https://infinite-sands-80753.herokuapp.com/',
      {
        name:newName,
        location:newLocation,
        description:newDescription,
        image:newImage,
        nearby:newNearby
      }
    ).then(()=>{
      axios.get('https://infinite-sands-80753.herokuapp.com/').then((response) => {
        setTravel(response.data)
      })
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

    </div>
  );
}

export default App;
