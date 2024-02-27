import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  async function handleSumbit(event) {
    event.preventDefault(); // STOP PAGE REFRESH

    const payload = {
    name,
    breed,
    imageUrl
      }

    try {
      const { data } = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/mikey-jaay/players', payload);
      console.log('ADDED ITEM', data);
      
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <form onSubmit={handleSumbit}>
      <label>
        Player Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Breed:
        <input value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      
      <label>
        ImageUrl:
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
  
      <button type='submit'>Add Player</button>
    </form>
  );
}
