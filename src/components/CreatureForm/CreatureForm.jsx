import { useState } from "react";

function CreatureForm ({addNewCreature}) {

  const [newCreatureName, setNewCreatureName] = useState('');
  const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

  //handleSubmit 
  const handleSubmit = (event) => {
    event.preventDefault();

    // POST request from App.js
 addNewCreature({name: newCreatureName, origin: newCreatureOrigin })

     //Clear Inputs & State
     setNewCreatureName('');
     setNewCreatureOrigin('')
  }

    return (
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          onChange={ (event) => setNewCreatureName(event.target.value) } 
          value={newCreatureName}
          />
        <label>Origin:</label>
        <input 
          onChange={ (event) => setNewCreatureOrigin(event.target.value) } 
          value={newCreatureOrigin}/>
        <button type="submit">Add New Creature</button>
      </form>
    )
}

export default CreatureForm;