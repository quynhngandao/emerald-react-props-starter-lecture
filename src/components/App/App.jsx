import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../CreatureForm/CreatureForm';
import './App.css';


function App () {
 
  const [creatureList, setCreatureList] = useState([]);
  
  // Function to get the creatures from the server/database
  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // Function to add a new creature to the database
  const addNewCreature = (newCreature) => {
axios({
      method: 'POST',
      url: '/creature',
      data: newCreature
    })
      .then( (response) => {
        console.log('Response:', response);
        fetchCreatures();
        // //Clear Inputs & State -> move to CreatureForm
        // setNewCreatureName('');
        // setNewCreatureOrigin('')
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect( () => {
    fetchCreatures();
  }, [])
  
  return (
    <div className="App">
      <Header title="Add Creature"/>
      
      <CreatureForm addNewCreature={addNewCreature}/>
      {/* componentName propsName={value of props} */}

      <Header title="All Creatures" />
      <CreatureList CreatureList={creatureList}/>
    </div>
  );

}

export default App
