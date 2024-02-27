import { useState } from "react"
import { addPlayer } from "../API"
import { useNavigate } from "react-router-dom"

import "../styles/NPF.css"

export default function AllPlayers() {
const navigate = useNavigate()

  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [image, setImage] = useState('')

async function handleSubmit(e) {
  e.preventDefault() // stops page refrect, e is short for event

  const playerObject ={
    name: name, 
    breed: breed, 
    imageUrl: image
  }
  await addPlayer(playerObject);
  navigate('/')
}

return <form onSubmit={handleSubmit}>
    <h1>Add Player</h1>
    <div>
      <label>Name</label>
      <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Breed</label>
      <input name='breed' value={breed} onChange={(e) => setBreed(e.target.value)} />
    </div>
    <div>
      <label>Image URL</label>
      <input name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
    </div>
    <input type='submit' className="submit-button"/>
  </form>
}
